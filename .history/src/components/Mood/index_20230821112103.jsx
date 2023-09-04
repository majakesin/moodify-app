
const Mood = (props) => {

    const {type, icon} = props;

    return (
        <div color={'red'}>
            {type}
            {icon}
        </div>
    )
};

export default Mood;