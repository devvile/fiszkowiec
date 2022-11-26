import Card from '../Utilities/Card'
import './Flashcard.css'
import { useState } from 'react'
import CorrectAnswer from '../UI/CorrectAnswer'
import WrongAnswer from '../UI/WrongAnswer'

const Flashcard = (props) =>{
    const [isClicked, setIsClicked] = useState(false);
    const [userAnswered, setUserAnswered] = useState(false);
    const [userAnswer, setUserAnswer] = useState(false);

    const cardChangeHandler = ()=>{
        if(userAnswered)  {
            setIsClicked(userAnswer);
            props.userClick(userAnswer)
        };
    };
    
    const answerClickHandler = (answer)=>{
        setUserAnswered(true);
        setUserAnswer(answer);
    };

    if(!props.flashcardData.isCovered){
    return (
        <article className="flashcard" onClick={cardChangeHandler}> 
            <div className='flashcard__header'></div>
            <h2 className='flashcard__character'>{props.flashcardData.character}</h2>
            {userAnswered && <h4>{props.flashcardData.pinyin}</h4>}
            {!userAnswered &&  <div className='flashcard__answers'> 
                <CorrectAnswer onClick={answerClickHandler}/>
                <WrongAnswer onClick={answerClickHandler}/>
            </div> }
            {userAnswered && <h3 className='flashcard__meaning'>{props.flashcardData.meaning}</h3>}
        </article>)
    }else{
        return(
            <article className="flashcard flashcard--covered "> 
                <h3 className='flashcard__character--covered'>梦</h3>
            </article>)
    }
}

export default Flashcard;