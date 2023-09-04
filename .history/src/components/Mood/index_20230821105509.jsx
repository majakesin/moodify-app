
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            <object src={icon} alt ='test' />
        </div>
    )
};

export default Mood;