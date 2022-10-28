import './Workspace.css'
import Home from '../Home/Home';
import Learn from '../Learn/Learn';
import About from '../About/About'
import Flashcards from '../Flashcards/Flashcards';

const Workspace = (props) =>{
    const dictionary = props.data;

    switch(props.renderedPage){
        case 'Home':
            return(<Home></Home>)
        break;
        case 'Learn':
            return(<Learn></Learn>)
        break;
        case 'Test':
            return(<Flashcards dictionary={dictionary}></Flashcards>)
        break;
    }
    

    return <section>{props.renderedPage}</section>
}

export default Workspace;