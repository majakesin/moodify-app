import { useLocation } from 'react-router';

const SongList = () => {

    const songType = useLocation().pathname.split(/)[0];
    console.log(location);


    return(<div></div>)
}

export default SongList;