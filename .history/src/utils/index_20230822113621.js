/* Example to show that functions that we are gonna use multiple in different components is okay to place in one file,
also I would probably on real project separate the constants in one file and functions in another..
*/

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