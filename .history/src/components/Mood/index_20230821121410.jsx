import styles from './index.module.css';

const Mood = (props) => {

    const { type, icon } = props;

    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.content}>
               <span className={styles.title}> {type} </span>
             <button></button>
            </div>
        </div>
    )
};

export default Mood;