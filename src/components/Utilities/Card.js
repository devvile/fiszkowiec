import './Card.css'

const Card = (props) =>{

    return (<article className={`Card ${props.classes}`}>
        {props.children}
    </article>)
}

export default Card;