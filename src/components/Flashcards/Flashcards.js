import { useState } from "react";

import FlashcardsConfig from "./FlashcardsConfig";
import FlashcardTest from "./FlashcardTest";
import './Flashcards.css'

const Flashcards = (props) =>{
    const [testStarted,setTestStarted] = useState(false);
    const [testConfig,setTestConfig] = useState({category:null});
    const [selectedFlashcards,setSelectedFlashcards] = useState([]);
    const testDictionary='';

    const finishTestHandler=()=>{
        setTestStarted(!testStarted);
    }

    const startTestHandler=(config)=>{
        const selectedCategories = config.category;
        const testFlashcards =  getSelectedCategoriesFlashcards (selectedCategories, props.dictionary);
        const randomLimitedFlashcards = getRandomCards(config.flashcardsNumber ,testFlashcards);

        setSelectedFlashcards(randomLimitedFlashcards);
        setTestConfig(config);
        setTestStarted(!testStarted);

        function getRandomCards(cardsNumber, flashcards){
            const result = [];
            let i = 1;
            while (i<=cardsNumber){
               const pickedFlashcard = getRandomCard(flashcards);
               result.push(pickedFlashcard);
               i++;
            };
            console.log(result);
            return result;
    
            function getRandomCard(flashcards){
                const pickedCard = flashcards[getRandomInt(0,flashcards.length-1)]
                flashcards.splice(flashcards.indexOf(pickedCard),1);
                
                return pickedCard
                
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
            }
        };

        function getSelectedCategoriesFlashcards(categories, dictionary){
            const result = [];
            categories.forEach((category) => {
                const categoryElements = dictionary.filter(el=>el.category==category);
                categoryElements.forEach(element=>result.push(element));
            });
            return result;
        }
    };

        return (
            <section className='flashcards-workspace'>
                {!testStarted && <FlashcardsConfig onTestStart={startTestHandler} dictionary={props.dictionary}></FlashcardsConfig>}
                {testStarted && <FlashcardTest onTestFinish = {finishTestHandler} config ={testConfig} dictionary={selectedFlashcards}></FlashcardTest>}
            </section>
            )
    }

export default Flashcards;