import { useMemo, useState} from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    const [showForm, setShowForm] = useState(false);

    //Example of the memoization 
    const songsList = useMemo(() => (
        songsToDisplay.map((song, index) => (
            <Song {...song} index={index} type={songType} />)
        )), [songsToDisplay, songType]);


    const onShowForm = () => setShowForm(!showForm);
    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new! </button>
        
        </div>
    )
}

export default SongList;