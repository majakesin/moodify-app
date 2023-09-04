import {moods}  from 'src/data/moods'
import Mood from './components/Mood';

const ChooseMood = () => {

    return (
        <div>
             {moods.map(({type,icon}) => {
        return (<Mood type={type} icon={icon} />)
      })}
        </div>
    )

};

export default ChooseMood;