
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            {icon}
        </div>
    )
};

export default Mood;