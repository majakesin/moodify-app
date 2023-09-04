
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            <img src={icon} alt ='test' />
        </div>
    )
};

export default Mood;