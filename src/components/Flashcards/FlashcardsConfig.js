import Card from "../Utilities/Card";
import {useState} from 'react';
import Button from "../UI/Button"
import './FlashcardsConfig.css'

const FlashcardsConfig = props =>{
    const allCategories =  getCategoriesList(props);
    const [flashcardsCategories, setFlashcardsCategories ] = useState(allCategories)
    const [categoriesTotal ,setCategoriesTotal] = useState(0);
    const [Error, setError] = useState(false);
    const [split,setSplit] = useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(allCategories.length).fill(false)
    );


    const itemsSumHandler = (e)=>{
        const selectedCategories = getChoicesCategories();
        const chosenCategoriesTotalItems= calculateCategoriesTotalItems(selectedCategories, props.dictionary);
        setCategoriesTotal(chosenCategoriesTotalItems);
        const checkStateCopy = checkedState;
        checkStateCopy[e.target.id]= e.target.checked
        console.log(checkStateCopy);
        
        setCheckedState(checkStateCopy);

        function calculateCategoriesTotalItems(selectedCategories, dictionary){
            let total = 0;
            selectedCategories.forEach(category=>{ total += dictionary.filter(item=>item.categor===category).length})
            return total;
        };
        

        function getChoicesCategories(){
            const selectedValues = [];
            const categoryCheckboxes = document.querySelectorAll('[name="category"]');
            categoryCheckboxes.forEach(checkbox=>{
                if(checkbox.checked){
                    selectedValues.push(checkbox.value)
                }
            });
    
            return selectedValues;
        }

    };

    const splitChangeHandler=(e) =>{
        setSplit(e.target.checked)
    };

    function backClickHandler(){
        setError(false);
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

    const startTest = (e)=>{
        const config = getConfig();
        if(configIsValid()){
            props.onTestStart(config);
        }else{
            setError(true);
        }

        function configIsValid(){
            return inputNotEmpty() && inputNotBiggerThanTotal();

            function inputNotEmpty(){  
              const inputValue =  document.querySelector('#flashcards-number-input').value;
              return inputValue > 0 && inputValue != null;
            };

            function inputNotBiggerThanTotal(){
                const inputValue =  document.querySelector('#flashcards-number-input').value;
                return inputValue <= categoriesTotal;
            };
        }

        function getConfig(){
           const flashcardsNumber =  document.querySelector('.flashcards-number-input__control').value;
           const splitNumber =  document.querySelector('.flashcards-split-input__control').value;
           const timer = document.querySelector('#flashcards-timer-input').checked;
           const categories = Array.from(document.querySelectorAll('[name="category"]'));
           const chosenCategoriesElements = categories.filter(el=>el.checked);
           const chosenCategoriesValues = chosenCategoriesElements.map(el=>el=el.value);

           return {
            flashcardsNumber:flashcardsNumber,
            splitNumber:splitNumber,
            timer:timer,
            category:chosenCategoriesValues
           }
        };
    };


    if(!Error){
        return <Card classes='flex'>
            <h2 className="config-header">Test Settings</h2>
            <form className="config-form">
                <div className="flashcards-options">
                    <h3>Flashcards Options:</h3>
                    <div className="flashcards-options__item flashcards-options__item--nomargin">
                        <label htmlFor='flashcards-number-input'>Flashcards number</label>
                        <input type='number' max={categoriesTotal} min='0' id='flashcards-number-input' className="flashcards-number-input__control"></input>
                    </div>
                    <div className="flashcards-options__item">
                        <label htmlFor='flashcards-split-input'>Split library to parts</label>
                        <input type='checkbox' onChange={splitChangeHandler} id='flashcards-split-input' className="flashcards-split-input__control"></input>
                    </div>
                    {split ===true &&
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
                    <h3 className="flashcards-categories__title">Flashcards Categories:</h3>
                    <h4 className="flashcards-categories__subtitle">{`Total items: ${categoriesTotal}`}</h4>
                    <ul className="config-form-categories-list">
                        {flashcardsCategories.map((category)=> { 
                            return (<li key={Math.random()} className="config-form-categories-list__item"><input name='category' checked ={checkedState[flashcardsCategories.indexOf(category)]} className="categories-list-item__radio-control" onChange={itemsSumHandler} value={category} id={flashcardsCategories.indexOf(category)} type='checkbox'></input>{category}</li>)})}
                    </ul>
                </div>
                <Button value='Start' onClick={startTest} classes='config-form-button'></Button>
            </form>
            <div className="config-footer"></div>
        </Card>
    }else{
        return <Card classes='flex'>
            <h2 className="config-header">Test Settings</h2>
            <div className="error-body">
                <h2>Invalid Card Number!</h2>
                <Button value='Back' onClick={backClickHandler} classes='config-error-button'></Button>
            </div>
            <div className="config-footer"></div>
        </Card>

    }
};

export default FlashcardsConfig;