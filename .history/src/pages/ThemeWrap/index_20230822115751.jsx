import { useEffect } from 'react';
import { setThemeOnFirstRender } from 'src/utils';

const ThemeWrap = (props) => {
    const {children} = props;

    useEffect(() => {
        setThemeOnFirstRender();
    },[]);

    return (
    <div>
        {children}
        </div>);
}
export default ThemeWrap;