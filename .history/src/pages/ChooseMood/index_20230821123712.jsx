import { moods } from 'src/data/moods'
import Mood from './components/Mood';

import styles from './index.module.css';

const ChooseMood = () => {

    return (
        <div>
            {moods.map(({ type, icon }) => {
                return (<Mood type={type} icon={icon} />)
            })}
        </div>
    )

};

export default ChooseMood;