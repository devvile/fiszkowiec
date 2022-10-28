import { useState } from "react";

import FlashcardsConfig from "./FlashcardsConfig";
import './Flashcards.css'

const Flashcards = (props) =>{
    return (
    <section className='flashcards-workspace'>
        <FlashcardsConfig dictionary={props.dictionary}></FlashcardsConfig>
    </section>
    )
}

export default Flashcards;