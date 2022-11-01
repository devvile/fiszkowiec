import Flashcard from "./Flashcard";
import './FlashcardTest.css'
import { useState } from "react";

const FlashcardTest= (props)=>{
    const allFlashcards = props.dictionary;
    const [remaningFlashcards,setRemainingFlashcards] = useState(allFlashcards)
    let initialRow = getCurrentRow(remaningFlashcards);
    //coverCards(initialRow);
    const[currentRow, setCurrentRow] = useState(initialRow);

    const state = {
        currentCard:{},
        allcards: null,
        score: null,
        currentRow: []
    }

    function userClickHandler(e) {
        remaningFlashcards.shift();
        setRemainingFlashcards(remaningFlashcards);
        const newRow = getCurrentRow(remaningFlashcards);
        //coverCards(newRow);
        setCurrentRow(newRow);
    }

    function coverCards(row){
        console.log('currentcards');
        console.log(row);
        row.forEach(card=>{
            card.isCovered = true;
        });
        row[0].isCovered = false;
    }

    function getCurrentRow(allFlashcards){
        if(allFlashcards.length>4){
            return allFlashcards.slice(0,4)
        }else{
            return allFlashcards
        }

    }

    return (<section className={"Flashcard-test " + props.classes}>
        {currentRow.map(flashcard=>{
            return <Flashcard userClick={userClickHandler} flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;