import { useState } from "react";

import FlashcardsConfig from "./FlashcardsConfig";
import FlashcardTest from "./FlashcardTest";
import './Flashcards.css'

const Flashcards = (props) =>{
    const [testStarted,setTestStarted] = useState(false);
    const [testConfig,setTestConfig] = useState({category:null});
    const [selectedFlashcards,setSelectedFlashcards] = useState([]);
    const testDictionary='';


    const startTestHandler=(config)=>{
        const selectedCategories = config.category;
        const testFlashcards =  getSelectedCategoriesFlashcards (selectedCategories, props.dictionary);
        setSelectedFlashcards(testFlashcards);
        setTestConfig(config);
        setTestStarted(true);


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
                {testStarted && <FlashcardTest config ={testConfig} dictionary={selectedFlashcards}></FlashcardTest>}
            </section>
            )
    }

export default Flashcards;