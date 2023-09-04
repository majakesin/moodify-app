import { moods } from 'src/data/moods'
import Mood from 'src/components/Mood';

import styles from './index.module.css';

const ChooseMood = () => {

    return (
        <div>
            <div className={styles['mood-list']}>
                {moods.map(({ type, icon }) => {
                    return (<Mood type={type} icon={icon} />)
                })}
            </div>
        </div>
    )

};

export default ChooseMood;