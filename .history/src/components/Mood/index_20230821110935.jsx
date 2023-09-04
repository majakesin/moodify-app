
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            <use src={icon} alt ='test' />
        </div>
    )
};

export default Mood;