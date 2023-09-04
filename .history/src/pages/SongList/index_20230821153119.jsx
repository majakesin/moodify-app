import { useLocation } from 'react-router';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];


    return(<div></div>)
}

export default SongList;