import { useEffect, useMemo } from 'react';
import { setThemeOnFirstRender } from 'src/utils';

const THEME_LIST = ['green', 'blue', 'pink'];

const ThemeWrap = (props) => {
    const { children } = props;

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