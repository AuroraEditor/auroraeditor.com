var AuroraNavIgnoreClick = false;

function AuroraNavToggle() {
    if (AuroraNavIgnoreClick) {
        // For some reason, the click is firing twice, so we need to ignore the second one
        return;
    }

    document.querySelector('.ANToggle').classList.toggle('button-multi-option-active');
    AuroraNavIgnoreClick = true;

    setTimeout(function () {
        // Enable button clicks again
        AuroraNavIgnoreClick = false;
    }, 100);
}

function AuroraNavClose() {
    // Close menu after click
    if (document.querySelector('.ANToggle')) {
        document.querySelector('.ANToggle').classList.remove('button-multi-option-active');
    }
}

document.querySelector("main").addEventListener('click', AuroraNavClose);

if (document.getElementById("button-multi-1")) {
    document.getElementById("button-multi-1").addEventListener('click', AuroraNavToggle);
}