window.didloadcontributors = false;

function httpGet(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText)
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

function makeUpperCaseAfterCommas(string) {
    return string
        // get first character
        .charAt(0).toUpperCase()
        // add the rest
        + string.slice(1)
            // Make uppercase after comma.
            .replace(/,\s*([a-z])/g, function (d, e) {
                return ", " + e.toUpperCase()
            });
}

function loadContributorsData() {
    if (window.didloadcontributors) {
        // We already did load, ignore request.
        return
    }

    if (document.getElementsByClassName("contributors-generator").length > 0) {
        console.log('Getting latest contributors');
        httpGet("https://api.github.com/repos/AuroraEditor/AuroraEditor/contributors?per_page=100", function (contents) {
            console.log('Parsing latest contributors');
            var data = JSON.parse(contents);
            var max = 4;
            var count = 0;
            var generated = '<aside class="section contributors-links contributors"><div class="section-content">';
            var endRow = '</div>';
            var beginRow = '<div class="row">';
            var person = `
        <div class="section-content column large-3 medium-6">
            <a href="USER_PROFILE_URL" target="_blank" class="block text-center">
                <img class="contributor-image" src="USER_AVATAR" onload="this.classList.remove('shimmer');" class="shimmer" width="100" height="100" loading="lazy">
                <p><strong>USER_NAME</strong></p>
            </a>
            <a href="https://github.com/AuroraEditor/AuroraEditor/commits?author=USER_NAME" target="_blank" class="block text-center">
                <p class="typography-subbody">USER_COMMITS</p>
            </a>
        </div>`;
            generated += beginRow;

            data.forEach(function (contributor) {
                if (contributor.login.includes('[bot]')) {
                    return
                }

                generated += person
                    .replaceAll(/USER_PROFILE_URL/g, contributor.html_url)
                    .replaceAll(/USER_AVATAR/g, contributor.avatar_url)
                    .replaceAll(/USER_NAME/g, contributor.login)
                    .replaceAll(/USER_COMMITS/g, contributor.contributions + '  contribution' + (parseInt(contributor.contributions) > 1 ? 's':''));

                count += 1;
            });

            generated += endRow;
            generated += '</div></aside>';

            document.getElementsByClassName("contributors-generator")[0].innerHTML = generated;
            window.didloadcontributors = true;
        })
    }
}

addEventListener('load', loadContributorsData);
setInterval(loadContributorsData, 1000); // check every second.
