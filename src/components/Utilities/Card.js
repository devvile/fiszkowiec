import './Card.css'

const Card = (props) =>{

    return (<article className={`Card ${props.classes}`} onClick={props.clickEvents}>
        {props.children}
    </article>)
}

export default Card;