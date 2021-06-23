export default function Word(props) {
    return (
        <div className='word'>
            <h3>{props.word.title}</h3>
            <br/>
            <h4>{props.word.author.name}</h4>
        </div>
    )
}