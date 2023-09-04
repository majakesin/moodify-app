import styles from './index.module.css';

const Mood = (props) => {

    const { type, icon } = props;

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img width={100} src={icon} alt={type} />
                <span className={styles.title}> {type} </span>
            </div>
            <span>Texttxttaydtdfkjhdlgjldfgjdfjkghdjkfhghjkfd sjdhfdkfjgkjdfhgjkhgfdkjh gkjhkhkjhkjhkhh jkhkjhkhhjkjkhhjkhjkhjk</span>
            <button> LISTEN!</button>
        </div>
    )
};

export default Mood;