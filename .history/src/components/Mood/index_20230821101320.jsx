
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            <img src={icon} />}
        </div>
    )
};

export default Mood;