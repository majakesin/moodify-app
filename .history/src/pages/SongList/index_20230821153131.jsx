import { useLocation } from 'react-router';
import { songs } from 'src/data/songs';
const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];


    return(<div></div>)
}

export default SongList;