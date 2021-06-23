import Word from "./Word"

export default function WordsList(props) {
    return (
        <div id='words-list'>
            <ul>
                {props.words.map(word => <li> <Word word={word}/> </li> )}
            </ul>
        </div>
    )
}