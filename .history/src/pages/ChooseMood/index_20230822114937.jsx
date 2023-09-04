import { useEffect, useMemo } from 'react';
import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';
import { setThemeOnFirstRender, THEME_KEY } from 'src/utils/index';
import styles from './index.module.css';
import { setTheme } from 'src/utils/index'


const THEME_LIST = ['green', 'blue', 'pink'];

const ChooseMood = () => {

    const theme = localStorage.getItem(THEME_KEY);

     //Example of the first render,in real project I would do wrapper on all the components for the theme
     useEffect(() => {
        setThemeOnFirstRender();
    }, []);

    const onChangeTheme = (e) => {
        setTheme(e.target.value);
    }

    const selectOptions = useMemo(()=> (
        THEME_LIST.map((theme) => (
            <option value={theme}>{theme}</option>
        ))
    ),[]);

    const moodsList = useMemo(() => (
        moods.map((mood) => (
             <Mood {...mood} />))   
    ),[]);

    return (
        <div>
            <select value={theme} onChange={onChangeTheme}>
                {selectOptions}
            </select>
            <div className={styles.wrap}>
                <span className={styles.welcome}>WELCOME! </span>
                <p className={styles.text}>Find some music based on your mood </p>
                <div className={styles['mood-list']}>
                    {moods.map((mood) => {
                        return (<Mood {...mood} />)
                    })}
                </div>
            </div>
        </div>
    )

};

export default ChooseMood;