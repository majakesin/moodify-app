
import styles from './index.module.css';

const Mood = (props) => {

    const { type,content, icon } = props;

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img width={100} src={icon} alt={type} />
            </div>
            <span className={styles.desktop}>{content}</span>
            <button> LISTEN!</button>
        </div>
    )
};

export default Mood;