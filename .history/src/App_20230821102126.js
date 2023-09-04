import './App.css';
import {moods}  from 'src/data/moods'
import Mood from './components/Mood';

function App() {
  return (
    <div className="App">
      {moods.map(({type,icon}) => {
        <Mood type={type} icon={icon} />
      })}
    </div>
  );
}

export default App;
