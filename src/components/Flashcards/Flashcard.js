import Card from '../Utilities/Card'
import './Flashcard.css'
const Flashcard = (props) =>{
    console.log(props);
    return (
    <Card classes="flashcard"> 
        <div className='flashcard__header'></div>
        <h2 className='flashcard__character'>{props.flashcardData.character}</h2>
        <h4>{props.flashcardData.pinyin}</h4>
        <h3 className='flashcard__meaning'>{props.flashcardData.meaning}</h3>
    </Card>)
}

export default Flashcard;