import Card from '../Utilities/Card'
import './Flashcard.css'
import { useState } from 'react'
import CorrectIcon from '../UI/CorrectIcon'
import WrongIcon from '../UI/WrongIcon'

const Flashcard = (props) =>{
    const [isClicked, setIsClicked] = useState(false);
    const [userAnswer, setUserAnswer] = useState(false);
    
    const cardClickHandler = () =>{
        setIsClicked(true);
    };
    //props.userClick

    if(!props.flashcardData.isCovered){
    return (
        <article className="flashcard" onClick={cardClickHandler}> 
            <div className='flashcard__header'></div>
            <h2 className='flashcard__character'>{props.flashcardData.character}</h2>
            <h4>{props.flashcardData.pinyin}</h4>
            <div className='flashcard__answers'> <CorrectIcon/><WrongIcon/></div>
            {userAnswer && <h3 className='flashcard__meaning'>{props.flashcardData.meaning}</h3>}
        </article>)
    }else{
        return(
            <article className="flashcard flashcard--covered "> 
                <h3 className='flashcard__character--covered'>梦</h3>
            </article>)
    }
}

export default Flashcard;