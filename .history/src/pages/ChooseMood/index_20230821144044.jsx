import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';

import styles from './index.module.css';

const ChooseMood = () => {

    const onChangeTheme = () => {

    }
    return (
        <div>
          <select onClick={}>Change theme!
           <option value='green'> Green</option> 
           <option value='blue'>Blue</option>
           <option value='pink'>Pink</option>
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