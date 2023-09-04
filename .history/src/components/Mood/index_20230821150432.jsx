
import styles from './index.module.css';

const Mood = (props) => {

    const { type, content, icon } = props;

    const href = `/${type}`;

    return (
        <div className={styles.card}>
            <img width={100} src={icon} alt={type} />
            <span className={styles.desktop}>{content}</span>
            <a href=}> LISTEN!</button>
        </div>
    )
};

export default Mood;