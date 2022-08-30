function detectColorScheme() {
    var theme = "light"

    if (typeof window.matchMedia !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark"
    }

    document.body.setAttribute("data-color-scheme", theme)
}

function setColorScheme(theme) {
    document.body.setAttribute("data-color-scheme", theme)
}

detectColorScheme()
