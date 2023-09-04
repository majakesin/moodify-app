import { useState } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon } = props;
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
            <input type="file" onChange={onChange} />
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