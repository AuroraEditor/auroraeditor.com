function ThemeSelection() {
    // We should handle on change for theme here
    return (
        <div className="content">
            <div className="color-scheme-toggle" role="radiogroup" tabIndex={0} aria-label="Select a color scheme preference.">
                <label data-color-scheme-option="light">
                    <input type="radio" name="colorToggle" value="light" autoComplete="off" />
                    <div className="text">Light</div>
                </label>
                <label data-color-scheme-option="dark">
                    <input type="radio" name="colorToggle" value="dark" autoComplete="off" />
                    <div className="text">Dark</div>
                </label>
                <label data-color-scheme-option="auto">
                    <input type="radio" name="colorToggle" value="auto" autoComplete="off" />
                    <div className="text">Auto</div>
                </label>
            </div>
        </div>
    )
}

export default ThemeSelection;
