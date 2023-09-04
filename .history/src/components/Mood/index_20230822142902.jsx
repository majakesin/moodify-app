import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';
import { useState } from 'react';

const Mood = (props) => {
    const { type, content, icon } = props;
    const [selectedFile, setSelectedFile] = useState(null);

    const href = `/${type}`;

    return (
        <div className={styles.card}>
            <img width={100} src={icon} alt={type} />
            <span className={styles.desktop}>{content}</span>
            <input type="file" />
            <a href={href}> LISTEN!</a>
        </div>
    )
};

Mood.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.object,
}

export default Mood;