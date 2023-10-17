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
        <div class="section-content column large-3 medium-6 small-12">
            <a href="PROFILE_URL" target="_blank" class="block text-center">
                <img class="contributor-image" src="AVATAR" onload="this.classList.remove('shimmer');" class="shimmer" width="100" height="100" loading="lazy">
                <p><strong>NAME</strong></p>
                <p class="typography-subbody">BIO</p>
            </a>
        </div>`;
            generated += beginRow;

            data.forEach(function (contributor) {
                if (contributor.login.includes('[bot]')) {
                    return
                }

                generated += person
                    .replace('PROFILE_URL', contributor.html_url)
                    .replace('AVATAR', contributor.avatar_url)
                    .replace('NAME', contributor.login)
                    .replace('BIO', contributor.contributions + ' contributions');

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
