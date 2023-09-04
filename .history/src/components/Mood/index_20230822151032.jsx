import { useState, useRef, useCallback } from 'react';

import PropTypes from 'prop-types';

//Also I like to seperate relative imports, imports from the packages and etc..
import styles from './index.module.css';

const Mood = (props) => {
    const { type, content, icon } = props;

    const hiddenFileInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState("");

    //Note: I use mailny onChange because that's current convencion on my project, but ofc we can use handleChange
    // It's imporntant that it starts with verb only
    const onChange = useCallback((event) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    }, []);

    const onClick = useCallback(() => {
        hiddenFileInput.current.click();
    }, []);

    const href = `/${type}`;

    return (
        <div className={styles.border}>
            <div className={styles.card}>
                <img width={100} src={icon} alt={type} />
                <span className={styles.desktop}>{content}</span>
                <input value={selectedFile} type="file" className="hidden" ref={hiddenFileInput} onChange={onChange} />
                <a href={href}>listen</a>
            </div>
        </div>
    )
};

Mood.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.object,
}

export default Mood;