import styles from './index.module.css';
import { songs } from 'src/data/songs';

const Song = (props) => {

    const { name, author, index, type } = props;

    const onDelete = () => {

    }

    return (
        <div className={styles.wrap}>
            <span>{name}</span>
            <span>{author}</span>
            <button onClick={}>Delete!</button>
        </div>
    )

};
export default Song;