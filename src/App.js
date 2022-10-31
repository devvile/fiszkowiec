import './App.css';
import {useState} from 'react';
import Menu from './components/UI/Menu'
import configData from './data/config.json'
import dictionary from './data/dictionary.json'
import Workspace from './components/Workspace/Workspace';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';

function App() {
  const [menuState, setMenuState] = useState('Home');
  const menuClickHandler = (itemName) =>{
    setMenuState(itemName);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Menu menuClick={menuClickHandler} items={configData.MENU.ITEMS} ></Menu>
      <Workspace renderedPage ={menuState} data={dictionary.WORDS}></Workspace>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
