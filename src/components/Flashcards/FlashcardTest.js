import Flashcard from "./Flashcard";
import './FlashcardTest.css'

const FlashcardTest= (props)=>{
    console.log(props);
    return (<section className={"Flashcard-test " + props.classes}>
        {props.dictionary.map(flashcard=>{
            return <Flashcard flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;