import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';

import styles from './index.module.css';

const ChooseMood = () => {

    return (
        <div>
          <button onClick={}>Change theme!</button>
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