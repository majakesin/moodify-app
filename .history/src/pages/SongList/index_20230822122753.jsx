import { useMemo, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    const [showForm, setShowForm] = useState(false);
    const [newSong, setNewSong] = useState({name: '', author: ''});

    //Example of the memoization 
    const songsList = useMemo(() => (
        songsToDisplay.map((song, index) => (
            <Song {...song} index={index} type={songType} />)
        )), [songsToDisplay, songType]);

    const onShowForm = useCallback(() => setShowForm(!showForm), [showForm]);

    const form = useMemo(() => {
        if (!showForm) {
            return null;
        }
    return (
        <div>
            <label>Song name</label>
            <input ></input>
        </div>
    )
    }, []);
    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new! </button>

        </div>
    )
}

export default SongList;