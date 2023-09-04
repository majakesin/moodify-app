import { useMemo, useCallback, useState } from 'react';
import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';
import styles from './index.module.css';

const ChooseMood = () => {

    const [moodList, setMoodList] = useState(moods);
    //Note: I use mailny onChange because that's current convencion on my project, but ofc we can use handleChange
    // It's imporntant that it starts with verb only
    const onChange = useCallback((index, file) => {
            setMoodList(moodList.map((mood,idx) => { 
                if(idx === index) {
                    return {...module, emoji: file}
                }
                return mood;
            } ))
    }, [moodList]);

    const moodsList = useMemo(() => (
        moodList.map((mood, index) => (
            <Mood key={mood.type} index={index} {...mood} onFileChange={onChange} />))
    ), [moodList, onChange]);

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