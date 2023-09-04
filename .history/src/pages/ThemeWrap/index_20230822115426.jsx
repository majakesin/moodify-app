import { useEffect } from 'react';
import { setThemeOnFirstRender } from 'src/utils';

const ThemeWrap = (children) => {

    useEffect(() => {
        setThemeOnFirstRender();
    },[]);

    return children;
}
export default ThemeWrap;