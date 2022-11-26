import './WrongAnswer.css'

const WrongAnswer = (props)=>{
    const answerClick = () =>{
        props.onClick(false);
    }
    return (
<svg className="wrong-icon" onClick={answerClick} version="1.1" fill='#ffffff' id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 208.891 208.891" >
<path d="M0,170l65.555-65.555L0,38.891L38.891,0l65.555,65.555L170,0l38.891,38.891l-65.555,65.555L208.891,170L170,208.891
	l-65.555-65.555l-65.555,65.555L0,170z"/>
</svg>
    )
}

export default WrongAnswer;