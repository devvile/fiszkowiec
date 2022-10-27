import './Workspace.css'
import Home from '../Home/Home';
import Learn from '../Learn/Learn';
import About from '../About/About'

const Workspace = (props) =>{
    switch(props.renderedPage){
        case 'Home':
            return(<Home></Home>)
        break;
        case 'Learn':
            return(<Learn></Learn>)
        break;
        case 'Test':
            return(<Home></Home>)
        break;
    }
    

    return <section>{props.renderedPage}</section>
}

export default Workspace;