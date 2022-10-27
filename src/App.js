import './App.css';
import Menu from './components/UI/Menu'
import Flashcards from './components/Flashcards/Flashcards'
import configData from './data/config.json'
import flashcards from './data/flashcards.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Menu items={configData.MENU.ITEMS}></Menu>
      <Flashcards data={flashcards.FLASHCARDS}></Flashcards>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
