import './Button.css'

const Button = props =>{
    return <input onClick={props.onClick} className={'main-button ' + props.classes } type='button' value={props.value}></input>
}

export default Button;