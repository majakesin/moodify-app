
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div>
            {type}
            <svg src={icon} alt ='test' />
        </div>
    )
};

export default Mood;