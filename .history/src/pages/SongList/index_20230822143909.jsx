import { useMemo, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import Song from 'src/components/Song';
import { songs } from 'src/data/songs';
import styles from './index.module.css';

const SongList = () => {

    //mocking values 
    const songType = useLocation().pathname.split('/')[1];
    const [songsToDisplay, setSongsToDisplay] = useState(songs[songType]);

    const [showForm, setShowForm] = useState(false);
    const [newSong, setNewSong] = useState({ name: '', author: '' });

    const onShowForm = useCallback(() => setShowForm(!showForm), [showForm]);

    const onDelete = useCallback((index) => {
        //Used to delete by index because we can have songs with same name, probably in real project I would use ID
        //that we get returned from the BE
        setSongsToDisplay(songsToDisplay.filter((_, idx) => index !== idx));
    }, [songsToDisplay]);

    const onChange = useCallback((evt) => {
        const value = evt.target.value;
        setNewSong({
            ...newSong,
            [evt.target.name]: value
        });
    }, [newSong]);

    const onSubmit = useCallback((event) => {
        event.preventDefault();
        setSongsToDisplay([...songsToDisplay, newSong])
    }, [newSong, songsToDisplay]);

    //this could also be seperate component if we had some state managment, or BE. I didn't do it so I don't
    //need to do pass props and etc..
    const form = useMemo(() => {
        const { name, author } = newSong;

        if (!showForm) {
            return null;
        }

        //Also when we have forms we need validations , I used Formik and Yup on one of the projects, currently
        //on this one we do it custom.. But some kind of validation is neeeded
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

    //Example of the memoization
    const songsList = useMemo(() => (
        songsToDisplay.map((song, index) => (
            <Song {...song} index={index} onDelete={onDelete} />
        ))), [songsToDisplay, onDelete]);

    return (
        <div>
            {songsList}
            <button onClick={onShowForm}> Add new </button>
            {form}
        </div>
    )
}

export default SongList;