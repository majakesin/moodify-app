import styles from './index.module.css';
import { songs } from 'src/data/songs';

const Song = (props) => {

    const { name, author, index, type } = props;

    const onDelete = () => {
        songs[type].splice(index, 1);
    }

    return (
        <div className={styles.wrap}>
            <span>{name}</span>
            <span>{author}</span>
            <button onClick={onDelete}>Delete!</button>
        </div>
    )

};
export default Song;