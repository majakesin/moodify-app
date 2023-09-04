import { useState, useCallback } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon} = props;
    const [currIcon, setCurrIcon] = useState(icon);

    const onChange = useCallback((event) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setCurrIcon(URL.createObjectURL(file));
        }
    }, []);

    const href = `/${type}`;

    return (
        <div className={styles.border}>
            <div className={styles.card}>
                <img width={100} className={styles.icon} src={currIcon} alt={type} />
                <span className={styles.desktop}>{content}</span>
                <div className={styles['btn-wrap']}>
                <input name={type} type="file" id={`emoji-${type}`} className={styles.file} onChange={onChange} />
                <label className={styles['file-label']} htmlFor={`emoji-${type}`}> Change emoji </label>
                <a href={href}>listen</a>
                </div>
            </div>
        </div>
    )
};

Mood.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
}

export default Mood;