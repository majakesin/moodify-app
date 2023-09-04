import { useEffect, useMemo} from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    //Example of the memoization 
    const songsList = useMemo(() => (
        songsToDisplay.map((song) => (
            <Song {...song} />)
        )), [songsToDisplay]);

    return (
        <div>
            {songsList}
            <button> Add new! </button>
        </div>
    )
}

export default SongList;