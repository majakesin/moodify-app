import { useEffect, useMemo, useState } from 'react';

import musicwave from 'src/images/musicwave.png';
import { setThemeOnFirstRender, setTheme, THEME_KEY } from 'src/utils';

const THEME_LIST = ['green', 'blue', 'pink'];

//Created this to make an example of the wrapping component. In real projects we have a lot of this
//For example <Provider /> or older routers versions, some styling libraries and etc..

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
            <option key={theme} value={theme}>{theme}</option>
        ))
    ), []);

    return (
        <div className={StyleSheet.theme}>
            <select value={currentTheme} onChange={onChangeTheme}>
                {selectOptions}
            </select>
            <img src={musicwave} alt="wave" />
            {children}
        </div>);
}
export default ThemeWrap;