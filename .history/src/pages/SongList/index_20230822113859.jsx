import { useLocation, useEffect, useMemo } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
import { setThemeOnFirstRender } from 'src/utils/index';

const SongList = () => { 

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    useEffect(() => {
        setThemeOnFirstRender();
    },[]);

    const renderSongs = useMemo(() => (
        songsToDisplay.map((song) => (
            <Song {...song} />
        )),[]);
        
    return(
        <div>
        {songsToDisplay.map((song) => (
            <Song {...song} />
        ))}
        <button> Add new! </button>
        </div>
    )
}

export default SongList;