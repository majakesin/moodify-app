import styles from './index.module.css';

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