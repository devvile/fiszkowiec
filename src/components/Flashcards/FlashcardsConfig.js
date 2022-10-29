import Card from "../Utilities/Card";
import {useState} from 'react';
import Button from "../UI/Button"
import './FlashcardsConfig.css'

const FlashcardsConfig = props =>{
    const allCategories =  getCategoriesList(props);
    const [flashcardsCategories, setFlashcardsCategories ] = useState(allCategories)
    const [chosenCategory,setChosenCategory] = useState('');
    const [split,setSplit] = useState(false);

    const  onCategoryChangeHandler = (e)=>{
        setChosenCategory(e.target.value)
    };

    const splitChangeHandler=(e) =>{
        setSplit(e.target.checked)
    };

    const startTestHandler = e =>{
        console.log('START!')
    }

    function getCategoriesList(props){
        const categoryList = [];
        props.dictionary.forEach(elem=>{
        if(!categoryList.includes(elem.category)){
            categoryList.push(elem.category)
        };
        });
        return categoryList;
    };


    return <Card classes='flex'>
        <h2 className="config-header">Test Settings</h2>
        <form className="config-form">
            <div className="flashcards-options">
                <h3>Flashcards Options:</h3>
                <div className="flashcards-options__item flashcards-options__item--nomargin">
                    <label htmlFor='flashcards-number-input'>Flashcards number</label>
                    <input type='number' max='200' min='100' id='flashcards-number-input' className="flashcards-number-input__control"></input>
                </div>
                <div className="flashcards-options__item">
                    <label htmlFor='flashcards-split-input'>Split library to parts</label>
                    <input type='checkbox' onChange={splitChangeHandler} id='flashcards-split-input' className="flashcards-split-input__control"></input>
                </div>
                {split ==true &&
                <div className="flashcards-options__item">
                    <label htmlFor='flashcards-split-number-input'>Split to parts</label>
                    <input type='number' id='flashcards-split-number-input' max='15' min='1' className="flashcards-split-input__control"></input>
                </div>
                }
                <div className="flashcards-options__item">
                    <label htmlFor='flashcards-timer-input'>Timer</label>
                    <input type='checkbox' id='flashcards-timer-input' className="flashcards-timer-input__control"></input>
                </div>
            </div>
            <div className="flashcards-categories">
                <h3>Flashcards Categories:</h3>
                <ul className="config-form-categories-list">
                    {flashcardsCategories.map((category)=> {return (<li key={Math.random()} className="config-form-categories-list__item"><input name='category' className="categories-list-item__radio-control" value={category} onChange={onCategoryChangeHandler} type='radio'></input>{category}</li>)})}
                </ul>
            </div>
            <Button value='Start' onClick={startTestHandler} classes='config-form-button'></Button>
        </form>
        <div className="config-footer"></div>
    </Card>
};

export default FlashcardsConfig;