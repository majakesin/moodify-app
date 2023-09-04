import { useEffect, useMemo, useState } from 'react';
import { setThemeOnFirstRender, setTheme, THEME_KEY } from 'src/utils';

const THEME_LIST = ['green', 'blue', 'pink'];

const ThemeWrap = (props) => {
    const { children } = props;
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem(THEME_KEY));

    const onChangeTheme = (e) => {
        setCurrentTheme(e.target.value);
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
            <select value={currentTheme} onChange={onChangeTheme}>
                {selectOptions}
            </select>
            {children}
        </div>);
}
export default ThemeWrap;