import styles from './index.module.css';

const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div className={styles.card}>
            <div>
            {icon}
            <</div>
            {type}
            
        </div>
    )
};

export default Mood;