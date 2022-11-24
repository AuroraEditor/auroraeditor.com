function detectColorScheme() {
    var theme = "light"

    if (typeof window.matchMedia !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark"
    }

    var colorToggle = document.querySelector("input[type=radio][name=colorToggle][value=auto]")
    if (colorToggle !== null) {
        colorToggle.checked = true
    }

    if (window.localStorage.getItem('themeColor') !== 'undefined') {
        if (['dark', 'light'].includes(window.localStorage.getItem('themeColor'))) {
            theme = window.localStorage.getItem('themeColor')
            var themeToggle = document.querySelector("input[type=radio][name=colorToggle][value=" + theme + "]")
            themeToggle.checked = true
        }
    }

    setColorScheme(theme, true)
}

function setColorScheme(theme, auto) {
    if (auto !== true) {
        window.localStorage.setItem('themeColor', theme)
    }

    if (theme === 'auto') {
        window.localStorage.removeItem('themeColor')
        detectColorScheme()
    } else {
        document.children[0].setAttribute("data-color-scheme", theme)
    }

    if (auto !== true) {
        document.querySelectorAll("input[type=radio][name=colorToggle]").forEach(function (element) {
            if (theme !== element.value) {
                element.checked = false
            }
        })
    }
}

function setupActions() {
    document.querySelectorAll("input[type=radio][name=colorToggle]").forEach(function (element) {
        element.addEventListener("click", function (input) { setColorScheme(input.target.value) }, false)
    })

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        detectColorScheme()
    })
}

detectColorScheme()
setupActions()
