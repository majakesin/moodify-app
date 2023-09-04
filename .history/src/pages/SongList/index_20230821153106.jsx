import { useLocation } from 'react-router';

const SongList = () => {

    const songType = useLocation().pathname.split('/');
    console.log(songType);


    return(<div></div>)
}

export default SongList;