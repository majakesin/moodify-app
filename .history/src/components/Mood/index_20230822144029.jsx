import { useState, useRef } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon } = props;

    const hiddenFileInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const onChange = (event) => {
        if (event.target.files) {
          setSelectedFile(event.target.files[0]);
        }
      };

    const href = `/${type}`;

    return (
        <div className={styles.card}>
            <img width={100} src={icon} alt={type} />
            <span className={styles.desktop}>{content}</span>
            <button className="button-upload" onClick={handleClick}>
        Upload a file
      </button>
            <input type="file" className={styles.file} value={selectedFile} ref={hiddenFileInput} onChange={onChange} />
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