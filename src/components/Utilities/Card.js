import './Card.css'

const Card = (props) =>{

    return (<article className={`Card ${props.classes}`} onClick={props.clickEvents}>
        <h2 className="card-header">{props.title}</h2>
            {props.children}
        <div className="card-footer"></div>
    </article>)
}

export default Card;