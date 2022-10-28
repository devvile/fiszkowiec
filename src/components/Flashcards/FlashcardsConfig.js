import Card from "../Utilities/Card";
import {useState} from 'react';

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


    return <Card>
        <form>
            <label htmlFor='flashcards-number-input'>Flashcards number</label>
            <input type='number' id='flashcards-number-input'></input>
            <ul>
                {flashcardsCategories.map((category)=> {return (<li><input name='category' value={category} type='radio'></input>{category}</li>)})}
            </ul>
        </form>
    </Card>
};

export default FlashcardsConfig;