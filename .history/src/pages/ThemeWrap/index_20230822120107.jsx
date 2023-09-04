import { useEffect, useMemo} from 'react';
import { setThemeOnFirstRender, setTheme } from 'src/utils';

const THEME_LIST = ['green', 'blue', 'pink'];

const ThemeWrap = (props) => {
    const { children } = props;
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
            <select onChange={onChangeTheme}>
                {selectOptions}
            </select>
            {children}
        </div>);
}
export default ThemeWrap;