import { useEffect, useMemo, useState } from 'react';
import { setThemeOnFirstRender, setTheme, THEME_KEY } from 'src/utils';

const THEME_LIST = ['green', 'blue', 'pink'];

const ThemeWrap = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState(localStorage.getItem(THEME_KEY));

    const onChangeTheme = (e) => {
        setTheme(e.target.value);
    }

    useEffect(() => {
        setThemeOnFirstRender();
    }, []);
    const selectOptions = useMemo(() => (
        THEME_LIST.map((theme) => (
            <option value={theme}>{theme}</option>
        ))
    ), []);
    return (
        <div>
            <select value={theme} onChange={onChangeTheme}>
                {selectOptions}
            </select>
            {children}
        </div>);
}
export default ThemeWrap;