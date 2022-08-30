function detectColorScheme() {
    var theme = "light"

    if (typeof window.matchMedia !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark"
    }

    document.body.setAttribute("data-color-scheme", theme)
}

function setColorScheme(theme) {
    if (theme === 'auto') {
        detectColorScheme()
    } else {
        document.body.setAttribute("data-color-scheme", theme)
    }
    
    document.querySelectorAll("input[type=radio][name=colorToggle]").forEach(function (e) {
        if (theme !== e.value) {
            e.checked = false
        }
    })
}

detectColorScheme()
