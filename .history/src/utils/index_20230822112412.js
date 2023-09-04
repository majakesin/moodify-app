
const THEME_KEY = 'theme';
const DEFAULT_THEME = 'green';

export const setTheme = theme => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.className = theme;
};

export const setThemeOnFirstRender = () => {
    const theme = localStorage.getItem(THEME_KEY);
    if(theme) {
        document.documentElement.className = theme;
        return;
    }
    document.documentElement.className = DEFAULT_THEME;
}