import { useMemo, useCallback, useState } from 'react';
import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';
import styles from './index.module.css';

const ChooseMood = () => {

    const [moodList, setMoodList] = useState(moods);
    //Note: I use mailny onChange because that's current convencion on my project, but ofc we can use handleChange
    // It's imporntant that it starts with verb only
    const onChange = useCallback((index, file) => {
            setMoodList([...moodList, {...moodList[index], emoji: URL.createObjectURL(file)}])
    }, [moodList]);
    const moodsList = useMemo(() => (
        moodList.map((mood) => (
            <Mood key={mood.type} {...mood} onFileChange={onChange} />))
    ), [onChange]);

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