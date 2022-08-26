function onDidChangeSystemColorScheme() {

    SystemColor.state.systemColorScheme = prefersColorSchemeMediaQueryList.matches ?
        ColorScheme.dark.value :
        ColorScheme.light.value;

    if (SystemColor.state.preferredColorScheme === ColorScheme.auto.value) {
        setPreferredColorScheme(ColorScheme.auto.value);
    }

}

function setPreferredColorScheme(colorSchemeValue) {

    SystemColor.setPreferredColorScheme(colorSchemeValue);

    Array.from(optionInputs).map((option) => {
        option.checked = !!(option.value === colorSchemeValue);
    });

    const prefersDark = !!(
        colorSchemeValue === ColorScheme.dark.value ||
        (
            colorSchemeValue === ColorScheme.auto.value &&
            SystemColor.state.systemColorScheme === ColorScheme.dark.value
        )
    );

    if (prefersDark) {
        ColorSchemeDarkHead.map((node) => {
            (node.parentElement === null && document.head.appendChild(node));
        });

        document.body.dataset.colorScheme = ColorScheme.dark.value;
    } else {
        ColorSchemeDarkHead.map((node) => {
            (node.parentElement && node.parentElement.removeChild(node));
        });

        document.body.dataset.colorScheme = ColorScheme.light.value;

    }
}

const ColorScheme = {
    auto: {
        value: 'auto',
    },
    light: {
        value: 'light',
    },
    dark: {
        value: 'dark',
    },
};

const ColorSchemeLocales = {
    en: {
        toggleAriaLabel: 'Select a color scheme preference',
        auto: 'Auto',
        light: 'Light',
        dark: 'Dark',
    }
};

const htmlLangAttribute = document.body.parentElement.lang;

const localeKey = htmlLangAttribute
    .replace('en_US', 'en')
    .replace('en-US', 'en')
    .replace('-', '_');

const Locale = ColorSchemeLocales[localeKey];

const ColorSchemeToggleRadioGroup = document.querySelector('.color-scheme-toggle');

const ColorSchemeToggleRadioLabels = ColorSchemeToggleRadioGroup.querySelectorAll('.text');

const ColorSchemeDarkHead = Array.from(
    document.head.querySelectorAll('[data-color-scheme="dark"]')
);

ColorSchemeDarkHead.map((node) => node.media = '');

ColorSchemeToggleRadioGroup.setAttribute('aria-label', Locale.toggleAriaLabel);

Array.from(ColorSchemeToggleRadioLabels).map((label) => {
    label.textContent = Locale[label.parentElement.dataset.colorSchemeOption];
});

const optionInputs = Array.from(
    window.document.querySelectorAll('label[data-color-scheme-option] > input[type="radio"]')
);

const supportsAutoColorScheme = (typeof window.matchMedia !== 'undefined') && [
    ColorScheme.light.value,
    ColorScheme.dark.value,
    'no-preference',
].some(scheme => window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches);

const defaultColorScheme = supportsAutoColorScheme ?
    ColorScheme.auto :
    ColorScheme.light;

const SystemColor = {
    state: {
        preferredColorScheme: window.Settings.preferredColorScheme || defaultColorScheme.value,
        supportsAutoColorScheme,
        systemColorScheme: ColorScheme.light.value,
    },
    setPreferredColorScheme(value) {
        this.state.preferredColorScheme = value;
        window.Settings.preferredColorScheme = value;
    },
    setSystemColorScheme(value) {
        this.state.systemColorScheme = value;
    },
    syncPreferredColorScheme() {
        if (
            !!(window.Settings.preferredColorScheme) &&
            window.Settings.preferredColorScheme !== this.state.preferredColorScheme
        ) {
            this.state.preferredColorScheme = window.Settings.preferredColorScheme;
        }
    },
};

const prefersColorSchemeMediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

if (supportsAutoColorScheme) {
    SystemColor.state.systemColorScheme = prefersColorSchemeMediaQueryList.matches ?
        ColorScheme.dark.value :
        ColorScheme.light.value;
}

try {
    prefersColorSchemeMediaQueryList.addEventListener('change', onDidChangeSystemColorScheme);
}
catch (e) {
    prefersColorSchemeMediaQueryList.addListener(onDidChangeSystemColorScheme);
}

if (supportsAutoColorScheme === false) {
    window.document.body.setAttribute('data-supports-auto-color-scheme', false);
}

setPreferredColorScheme(SystemColor.state.preferredColorScheme);

window.setPreferredColorScheme = setPreferredColorScheme;

window.addEventListener('pageshow', () => {
    SystemColor.syncPreferredColorScheme();
});

function colorSchemeHotKeys(e) {
    if (e.ctrlKey && e.which == 73) {
        const invertColorSchemeValue = document.body.dataset.colorScheme === "dark" ? "light" : "dark";
        setPreferredColorScheme(invertColorSchemeValue);
    }

    if (e.ctrlKey && e.shiftKey && e.which == 73) {
        setPreferredColorScheme(ColorScheme.auto.value);
    }
}

document.addEventListener("keyup", colorSchemeHotKeys, false);
