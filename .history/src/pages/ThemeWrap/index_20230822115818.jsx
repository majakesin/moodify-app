import { useEffect } from 'react';
import { setThemeOnFirstRender } from 'src/utils';

const ThemeWrap = (props) => {
    const { children } = props;

    useEffect(() => {
        setThemeOnFirstRender();
    }, []);
    const selectOptions = useMemo(()=> (
        THEME_LIST.map((theme) => (
            <option value={theme}>{theme}</option>
        ))
    ),[]);
    return (
        <div>
            
            {children}
        </div>);
}
export default ThemeWrap;