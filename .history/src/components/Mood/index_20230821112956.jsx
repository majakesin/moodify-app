import styles from './index.css';

const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div className={styles.card}>
            {type}
            {icon}
        </div>
    )
};

export default Mood;