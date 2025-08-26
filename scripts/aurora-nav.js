function auroranavUpdate() {
    function basicPath(path) {
        if (!path) {
            path = this;
        }

        // eslint-disable-next-line no-useless-escape
        return path.replace(/index\.\w+$/, '').replace(/^https?:\/\/[\w\.]+/, '').toLowerCase();
    }

    // eslint-disable-next-line no-extend-native
    String.prototype.basicPath = basicPath;

    // eslint-disable-next-line no-restricted-globals
    var page = "/" + (location.hash || "#/");
    var navItems = document.querySelectorAll('#auroranav .auroranav-menu-link');

    navItems.forEach(function (navItem) {
        if (navItem.href.basicPath() === page) {
            navItem.classList.add('current');
            navItem.setAttribute('aria-disabled', 'true');
        } else {
            navItem.classList.remove('current');
        }

        navItem.addEventListener("click", function (e) {
            // Close menu after click
            document.querySelector(".auroranav-menustate").checked = false
        })
    });
}

auroranavUpdate();
window.addEventListener('DOMContentLoaded', auroranavUpdate);

// React on changed history state to update menu.
(function() {
    var previousState = window.history.state;
    setInterval(function() {
        if (previousState !== window.history.state) {
            previousState = window.history.state;
            auroranavUpdate();
        }
    }, 100);
})();
