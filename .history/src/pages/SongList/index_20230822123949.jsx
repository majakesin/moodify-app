import { useMemo, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
import styles from './index.module.css';

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

    const onSubmit  = useCallback((evt) => {
        const value = evt.target.value;
        setNewSong({
          ...newSong,
          [evt.target.name]: value
        });
      },[newSong]);

    const form = useMemo(() => {
        const { name, author } = newSong;

        if (!showForm) {
            return null;
        }

        return (
            <form className={styles.form} onSubmit={onSubmit}>
                <label>Name
                <input type="text" name="Name" value={name} />
                </label>
                <label> Author
                <input type="text" name="Author" value={author} />
                </label>
                
            </form>
        )
    }, [showForm, newSong, onSubmit]);

    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new! </button>
            {form}
        </div>
    )
}

export default SongList;