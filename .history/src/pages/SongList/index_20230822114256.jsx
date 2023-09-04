import { useEffect, useMemo} from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
import { setThemeOnFirstRender } from 'src/utils/index';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    //Example of the first render,in real project I would do wrapper on all the components for the theme
    useEffect(() => {
        setThemeOnFirstRender();
    }, []);

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