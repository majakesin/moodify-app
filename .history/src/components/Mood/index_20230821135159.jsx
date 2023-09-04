import styles from './index.module.css';

const Mood = (props) => {

    const { type, icon } = props;

    return (
        <div className={styles.card}>
            <img src={icon} alt={type} />
            <span className={styles.title}> {type} </span>  
            <div className={styles.content}>
               
             <button> LISTEN!</button>
             </div>
        </div>
    )
};

export default Mood;