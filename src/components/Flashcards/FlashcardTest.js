import Flashcard from "./Flashcard";
import './FlashcardTest.css'
import { useState } from "react";

const FlashcardTest= (props)=>{
    const allFlashcards = props.dictionary;
    const [remaningFlashcards,setRemainingFlashcards] = useState(allFlashcards)
    let initialRow = getCurrentRow(remaningFlashcards);
    coverCards(initialRow);
    const[currentRow, setCurrentRow] = useState(initialRow);

    const state = {
        currentCard:{},
        allcards: null,
        score: null,
        currentRow: []
    }

    function userClickHandler(e) {
        remaningFlashcards.shift();
        if( remaningFlashcards.length>0){
            setRemainingFlashcards(remaningFlashcards);
            const newRow = getCurrentRow(remaningFlashcards);
            coverCards(newRow);
            setCurrentRow(newRow);
        }else{
            endTest();
        }

    };

    function coverCards(row){
        if(row.length>0){
            row.forEach(card=>{
                card.isCovered = true;
            });
            row[0].isCovered = false;
        }else{
            endTest()
        };
        
    }

    function getCurrentRow(allFlashcards){
        if(allFlashcards.length>4){
            return allFlashcards.slice(0,4)
        }else{
            if(allFlashcards.length>0){
                return allFlashcards.slice(0, allFlashcards.length-1)
            }
        }
    };

    function endTest(){
        return <h3>Test Ended!</h3>
    }

    return (<section className={"Flashcard-test " + props.classes}>
        {currentRow.map(flashcard=>{
            return <Flashcard userClick={userClickHandler} flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
}

export default FlashcardTest;