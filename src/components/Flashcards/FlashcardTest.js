import Flashcard from "./Flashcard";
import './FlashcardTest.css'
import { useState } from "react";
import Card from "../Utilities/Card";
import Button from "../UI/Button";

const FlashcardTest= (props)=>{
    const allFlashcards = props.dictionary;
    const [testIsFinished,setTestFinished] = useState(false);

    const [remaningFlashcards,setRemainingFlashcards] = useState(allFlashcards)
    let initialRow = getCurrentRow(remaningFlashcards);
    if(initialRow && initialRow.length>0){
        coverCards(initialRow);
    }else{
        console.log('option 2')
       // setTestFinished(true);
    };
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
            console.log(newRow);
            coverCards(newRow);
            setCurrentRow(newRow);
        }else{
            setTestFinished(true);
        }   
    };

    function testEndHandler(e){
        setTestFinished(false);
    }

    function coverCards(row){
        if(row.length>0){
            row.forEach(card=>{
                card.isCovered = true;
            });
            row[0].isCovered = false;
        };
    }

    function getCurrentRow(allFlashcards){
        if(allFlashcards.length>3){
            return allFlashcards.slice(0,3)
        }else{
            if(allFlashcards.length>0){
                return allFlashcards.slice(0, allFlashcards.lengths)
            }else{
            }
        }
    };

    function endTest(){
        setTestFinished(true);
        return <h3>Test Ended!</h3>
    }

    if(!testIsFinished){
        return (<Card  title='Test Your Skills!' classes={"Flashcard-test " + props.classes}>
            {currentRow.map(flashcard=>{
                return <Flashcard userClick={userClickHandler} flashcardData={flashcard} key={Math.random()}></Flashcard>
            })}
        </Card>)
    }else{
        return (
            <Card classes='Flashcard-results test-results' title='Test Complete'>
                <h2 className='Flashcard-test__heading'>Test Finished!</h2>
                <h4 className='Flashcard-test__score'>Your Score: 10/10</h4>
                <Button classes='Flashcard-test__btn results-button' onClick={props.onTestFinish}  value='New Test'></Button>
            </Card>
        )
    }

}

export default FlashcardTest;