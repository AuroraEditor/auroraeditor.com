function auroranavUpdate() {
    function basicPath(path) {
        if (!path) {
            path = this;
        }

        return path.replace(/index\.\w+$/, '').replace(/^https?:\/\/[\w\.]+/, '').toLowerCase();
    }

    String.prototype.basicPath = basicPath;

    // eslint-disable-next-line no-restricted-globals
    var page = location.pathname.basicPath();
    var navItems = document.querySelectorAll('#auroranav .auroranav-menu-link');

    navItems.forEach(function (navItem) {
        if (navItem.href.basicPath() == page) {
            navItem.classList.add('current');
            navItem.setAttribute('aria-disabled', 'true');
        }
    });
}

auroranavUpdate();
window.addEventListener('DOMContentLoaded', auroranavUpdate);