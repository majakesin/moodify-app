import styles from './index.module.css';

const Mood = (props) => {

    const { type, icon } = props;

    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div>
                {type}
            </div>
        </div>
    )
};

export default Mood;