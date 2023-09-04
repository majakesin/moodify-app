

const Song = (props) => {

    const { name, author, delete} = props;

    return (
        <div>
            <span>{name}</span>
            <span>{author}</span>
            <button onClick={onDelete}>Delete!</button>
        </div>
    )

};
export default Song;