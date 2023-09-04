import { useMemo, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const songsToDisplay = songs[songType];

    const [showForm, setShowForm] = useState(false);
    const [newSong, setNewSong] = useState({ name: '', author: '' });

    //Example of the memoization 
    const songsList = useMemo(() => (
        songsToDisplay.map((song, index) => (
            <Song {...song} index={index} type={songType} />)
        )), [songsToDisplay, songType]);

    const onShowForm = useCallback(() => setShowForm(!showForm), [showForm]);

    const form = useMemo(() => {
        const { name, author } = newSong;
        if (!showForm) {
            return null;
        }
        return (
            <form>
                <label>Name
                <input type="text" name="Name" value={name} />
                </label>
                <label> Author
                <input type="text" name="Author" value={author} />
                </label>
                
            </form>
        )
    }, [showForm, newSong]);
    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new! </button>
            {form}
        </div>
    )
}

export default SongList;