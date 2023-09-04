import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

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