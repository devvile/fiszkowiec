import Flashcard from "./Flashcard";
import './FlashcardTest.css'

const FlashcardTest= (props)=>{
    const config = props;
    return (<section className={"Flashcard-test " + props.classes}>
        {props.cards.map(flashcard=>{
            return <Flashcard flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;