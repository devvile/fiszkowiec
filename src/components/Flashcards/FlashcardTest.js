import Flashcard from "./Flashcard";
import './FlashcardTest.css'
import { useState } from "react";

const FlashcardTest= (props)=>{
    const allFlashcards = props.dictionary;
    const [remaningFlashcards,setRemainingFlashcards] = useState(allFlashcards)
    let initialRow = getCurrentRow(remaningFlashcards);
    coverCards(initialRow);
    const[currentRow, setCurrentRow] = useState(initialRow);
    const [testIsFinished,setTestFinished] = useState(false);

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
            console.log(newRow);
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
                return allFlashcards.slice(0, allFlashcards.lengths)
            }else{
                endTest()
            }
        }
    };

    function endTest(){
        return <h3>Test Ended!</h3>
    }
    if(!testIsFinished){
    return (<section className={"Flashcard-test " + props.classes}>
        {currentRow.map(flashcard=>{
            return <Flashcard userClick={userClickHandler} flashcardData={flashcard} key={Math.random()}></Flashcard>
        })}
    </section>)
    }else{
        return <h3>Test Finished</h3>
    }

}

export default FlashcardTest;