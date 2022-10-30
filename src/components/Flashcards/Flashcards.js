import { useState } from "react";

import FlashcardsConfig from "./FlashcardsConfig";
import FlashcardTest from "./FlashcardTest";
import './Flashcards.css'

const Flashcards = (props) =>{
    const [testStarted,setTestStarted] = useState(false);
    const [testConfig,setTestConfig] = useState({category:null});
    const testDictionary='';


    const startTestHandler=(config)=>{
        const testDictionary='';
        console.log(testDictionary);
        setTestStarted(true)
    }

        return (
            <section className='flashcards-workspace'>
                {!testStarted && <FlashcardsConfig onTestStart={startTestHandler} dictionary={props.dictionary}></FlashcardsConfig>}
                {testStarted && <FlashcardTest config ={testConfig} dictionary={testDictionary}></FlashcardTest>}
            </section>
            )
    }

export default Flashcards;