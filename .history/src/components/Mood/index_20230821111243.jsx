
const Mood = (props) => {

    const {type, Icon} = props;

    return (
        <div>
            {type}
            <Icon/>
        </div>
    )
};

export default Mood;