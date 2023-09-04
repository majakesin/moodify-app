import { useMemo } from 'react';
import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';
import styles from './index.module.css';

const ChooseMood = () => {

    const moodsList = useMemo(() => (
        moods.map((mood, idx) => (
            <Mood key={mood.type} {...mood} />))
    ), []);

    return (
        <div>
            <div className={styles.wrap}>
                <p className={styles.welcome}>WELCOME! </p>
                <p className={styles.text}>Find some music based on your mood </p>
                <div className={styles['mood-list']}>
                    {moodsList}
                </div>
            </div>
        </div>
    )

};

export default ChooseMood;