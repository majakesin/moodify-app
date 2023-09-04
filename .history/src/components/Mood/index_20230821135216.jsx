import styles from './index.module.css';

const Mood = (props) => {

    const { type, icon } = props;

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={icon} alt={type} />
                <span className={styles.title}> {type} </span>
            </div>
            <button> LISTEN!</button>
        </div>
    )
};

export default Mood;