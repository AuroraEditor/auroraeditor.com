window.didloadcontributors = false
window.isLoadingContributors = false

function httpGetAsJSON(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(JSON.parse(xmlHttp.responseText))
        } else {
            callback([])
        }
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

function loadContributorsData() {
    if (window.isLoadingContributors || window.didloadcontributors) {
        // We already did load or are loading, ignore request.
        return
    }

    // We are loading.
    window.isLoadingContributors = true

    if (document.getElementsByClassName("contributors-generator").length > 0) {
        var ddata = {
            // Internal variable for contributors.
            contributorsInternal: {},

            // Listener for contributors.
            contributorsListener: function (val) { },

            // Setter for contributors.
            set contributors(val) {
                this.contributorsInternal = val
                this.contributorsListener(val)
            },

            // Getter for contributors.
            get contributors() {
                return this.contributorsInternal
            },

            // Register a listener for contributors.
            registerListener: function (listener) {
                this.contributorsListener = listener
            }
        }

        // Load AuroraEditor repos.
        httpGetAsJSON("https://api.github.com/users/AuroraEditor/repos", function (AuroraEditorReposJSON) {
            if (AuroraEditorReposJSON.length === 0) {
                return
            }

            console.log(AuroraEditorReposJSON)

            AuroraEditorReposJSON.forEach(function (repo) {
                console.log(repo.name)

                // Load contributors for each repo.
                httpGetAsJSON("https://api.github.com/repos/AuroraEditor/" + repo.name + "/contributors?per_page=100", function (ContributorsJSON) {
                    ddata.contributors[repo.name] = ContributorsJSON
                })
            })
        })

        ddata.registerListener(function (newValue) {
            var max = 4
            var count = 0
            var generated = '<aside class="section contributors-links contributors"><div class="section-content">'
            var endRow = '</div>'
            var beginRow = '<div class="row">'
            var person = `
        <div class="section-content column large-3 medium-6 small-12">
            <a href="PROFILE_URL" target="_blank" class="block text-center">
                <img class="contributor-image" src="AVATAR" onload="this.classList.remove('shimmer')" class="shimmer" width="100" height="100" loading="lazy">
                <p><strong>NAME</strong></p>
                <p class="typography-subbody">BIO</p>
            </a>
        </div>`
            generated += beginRow

            var data = {}

            newValue.forEach(function (repo) {
                repo.forEach(function (contributor) {
                    if (typeof data[contributor.login] === 'undefined') {
                        // Add contributor.
                        data[contributor.login] = contributor
                    } else {
                        // Update contributor.
                        data[contributor.login].contributions += contributor.contributions
                    }
                })
            })

            // Flatten Object to Array and Sort by contributions.
            var sortedData = Object.values(data).sort(function (a, b) {
                return b.contributions - a.contributions
            })

            sortedData.forEach(function (contributor) {
                if (contributor.login.includes('[bot]')) {
                    return
                }

                generated += person
                    .replace('PROFILE_URL', contributor.html_url)
                    .replace('AVATAR', contributor.avatar_url)
                    .replace('NAME', contributor.login)
                    .replace('BIO', contributor.contributions + ' contributions')

                count += 1
            })

            generated += endRow
            generated += '</div></aside>'

            document.getElementsByClassName("contributors-generator")[0].innerHTML = generated
            window.didloadcontributors = true
        })
    }
}

addEventListener('load', loadContributorsData)
setInterval(loadContributorsData, 1000) // check every second.
