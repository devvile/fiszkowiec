import Card from "../Utilities/Card";
import {useState} from 'react';
import Button from "../UI/Button"
import './FlashcardsConfig.css'

const FlashcardsConfig = props =>{
    const allCategories =  getCategoriesList(props);
    const [flashcardsCategories, setFlashcardsCategories ] = useState(allCategories)

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
            <div>
                <label htmlFor='flashcards-number-input'>Flashcards number</label>
                <input type='number' id='flashcards-number-input' className="flashcards-number-input__control"></input>
            </div>
            <div>
                <h3>Flashcard Categories:</h3>
                <ul className="config-form-categories-list">
                    {flashcardsCategories.map((category)=> {return (<li className="config-form-categories-list__item"><input name='category' value={category} type='radio'></input>{category}</li>)})}
                </ul>
            </div>
            <Button value='Start' classes='config-form-button'></Button>
        </form>
        <div className="config-footer"></div>
    </Card>
};

export default FlashcardsConfig;