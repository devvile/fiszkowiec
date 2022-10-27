import Flashcard from "./Flashcard";
import './FlashcardTest.css'

const FlashcardTest= (props)=>{
    const config = props;
    return (<section className="Flashcard-test">
        {props.cards.map(flashcard=>{
            return <Flashcard flashcardData={flashcard}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;