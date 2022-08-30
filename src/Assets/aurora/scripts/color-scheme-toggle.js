function detectColorScheme() {
    var theme = "light"

    if (typeof window.matchMedia !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark"
    }

    console.log("color scheme: " + theme + " [AUTO]")
    document.body.setAttribute("data-color-scheme", theme)
}

function setColorScheme(theme) {
    if (theme === 'auto') {
        detectColorScheme()
    } else {
        console.log("color scheme: " + theme)
        document.body.setAttribute("data-color-scheme", theme)
    }
    
    document.querySelectorAll("input[type=radio][name=colorToggle]").forEach(function (e) {
        if (theme !== e.value) {
            e.checked = false
        }
    })
}

function setupActions() {
    document.querySelectorAll("input[type=radio][name=colorToggle]").forEach(function (e) {
        e.addEventListener("click", setColorScheme(e.value))
    })
}

detectColorScheme()
setupActions()
