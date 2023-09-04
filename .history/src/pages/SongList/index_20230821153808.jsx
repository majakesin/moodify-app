import { useLocation } from 'react-router';
import { songs } from 'src/data/songs';
const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    return(
        <div>
        {songs[songType].songs.ma}
        <button> Add new! </button>
        </div>
    )
}

export default SongList;