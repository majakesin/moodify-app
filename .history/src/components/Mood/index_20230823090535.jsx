import { useState, useCallback } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon,index, onFileChange } = props;

    const onChange = useCallback((event) => {

    })

    const href = `/${type}`;

    return (
        <div className={styles.border}>
            <div className={styles.card}>
                <img width={100} src={currentIcon} alt={type} />
                <span className={styles.desktop}>{content}</span>
                <input type="file" id="emoji"  className={styles.file} onChange={onFileChange} />
                <label className={styles['file-label']} for="emoji"> Change emoji </label>
                <a href={href}>listen</a>
            </div>
        </div>
    )
};

Mood.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.object,
    onFileChange: PropTypes.func,
}

export default Mood;