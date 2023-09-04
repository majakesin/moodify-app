import styles from './index.module.css';

const Song = (props) => {

    const { name, author, onDelete } = props;

    return (
        <div>
            <span>{name}</span>
            <span>{author}</span>
            <button onClick={onDelete}>Delete!</button>
        </div>
    )

};
export default Song;