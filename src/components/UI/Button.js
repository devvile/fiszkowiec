import './Button.css'

const Button = props =>{
    return <input className={'main-button ' + props.classes } type='button' value={props.value}></input>
}

export default Button;