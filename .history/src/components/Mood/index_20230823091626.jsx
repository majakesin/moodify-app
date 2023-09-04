import { useCallback } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon, emoji, index, onFileChange } = props;

    const currIcon = emoji ? emoji : icon;

    const onChange = useCallback((event) => {
        if (event.target.files) {
            const file = event.target.files[0];
            onFileChange(index, file);
        }
    }, [index, onFileChange]);

    const href = `/${type}`;

    return (
        <div className={styles.border}>
            <div className={styles.card}>
                <img width={100} src={currIcon} alt={type} />
                <span className={styles.desktop}>{content}</span>
                <input type="file" id="emoji" className={styles.file} onChange={onChange} />
                <label className={styles['file-label']} for="emoji"> Change emoji </label>
                <a href={href}>listen</a>
            </div>
        </div>
    )
};

Mood.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    index: PropTypes.number,
    onFileChange: PropTypes.func,
}

export default Mood;