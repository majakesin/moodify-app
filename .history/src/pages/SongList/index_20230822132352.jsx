import { useMemo, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
import styles from './index.module.css';

const SongList = () => {

    const songType = useLocation().pathname.split('/')[1];
    const [songsToDisplay, setSongsToDisplay] = useState(songs[songType]);

    const [showForm, setShowForm] = useState(false);
    const [newSong, setNewSong] = useState({ name: '', author: '' });

    //Example of the memoization 
    const songsList = useMemo(() => (
        songsToDisplay.map((song, index) => (
            <Song {...song} index={index} type={songType} />)
        )), [songsToDisplay, songType]);

    const onShowForm = useCallback(() => setShowForm(!showForm), [showForm]);

    const onChange  = useCallback((evt) => {
        const value = evt.target.value;
        setNewSong({
          ...newSong,
          [evt.target.name]: value
        });
        songs[songType].push(newSong);
      },[newSong]);
    
    const onSubmit = useCallback((event) => {
        event.preventDefault();
        setSongsToDisplay([...songsToDisplay, newSong])
    },[newSong, songsToDisplay]);

    const form = useMemo(() => {
        const { name, author } = newSong;

        if (!showForm) {
            return null;
        }

        return (
            <form onSubmit={onSubmit} className={styles.form} >
                <label>Name
                <input type="text" name="name" value={name} onChange={onChange} />
                </label>
                <label> Author
                <input type="text" name="author" value={author} onChange={onChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }, [showForm, newSong, onChange, onSubmit]);

    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new! </button>
            {form}
        </div>
    )
}

export default SongList;