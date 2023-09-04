import PropTypes from 'prop-types';

import { AiFillDelete } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import styles from './index.module.css';

const Song = (props) => {

    const { name, author, index, onDelete } = props;

    const handleDelete = () => {
        onDelete(index);
    }
    return (
        <div>
            <div className={styles.wrap}>
                <p>{name}</p>
                <p>{author}</p>
                <button onClick={handleDelete}><AiFillDelete /></button>
            </div>
        </div>
    )

};

//Example of defining the propTypes, I use this when we are not using typescript and also add defaultValues 
//if prop type is not required. I love using propTypes because it's easier for new dev to know what is needed and why
Song.propTypes = {
    author: PropTypes.string,
    name: PropTypes.string,
    index: PropTypes.number,
    onDelete: PropTypes.func,
}
export default Song;