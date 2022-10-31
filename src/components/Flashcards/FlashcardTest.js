import Flashcard from "./Flashcard";
import './FlashcardTest.css'
import { useState } from "react";

const FlashcardTest= (props)=>{

    return (<section className={"Flashcard-test " + props.classes}>
        {props.dictionary.map(flashcard=>{
            return <Flashcard flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;