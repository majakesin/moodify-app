import { useMemo } from 'react';
import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';
import styles from './index.module.css';

const ChooseMood = () => {

        //Note: I use mailny onChange because that's current convencion on my project, but ofc we can use handleChange
    // It's imporntant that it starts with verb only
    const onChange = useCallback((event) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
            setCurrentIcon(URL.createObjectURL(event.target.files[0]))
        }
    }, []);
    const moodsList = useMemo(() => (
        moods.map((mood) => (
             <Mood  key={mood.type} {...mood} />))   
    ),[]);

    return (
        <div>
            <div className={styles.wrap}>
                <span className={styles.welcome}>WELCOME! </span>
                <p className={styles.text}>Find some music based on your mood </p>
                <div className={styles['mood-list']}>
                    {moodsList}
                </div>
            </div>
        </div>
    )

};

export default ChooseMood;