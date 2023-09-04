import PropTypes from 'prop-types';

import styles from './index.module.css';

const Song = (props) => {

    const { name, author, onDelete } = props;

    return (
        <div className={styles.wrap}>
            <span>{name}</span>
            <span>{author}</span>
            <button onClick={onDelete}>Delete!</button>
        </div>
    )

};

Song.propTypes = { 
    author: PropTypes.string,
    name: PropTypes.string,
    onDelete: PropTypes.func,
}
export default Song;