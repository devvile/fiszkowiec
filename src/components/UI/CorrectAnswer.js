import './CorrectAnswer.css'

const CorrectAnswer =(props)=>{ 
    const answerClick = () =>{
        props.onClick(true);
    }
    return (
<svg className='correct-icon' onClick={answerClick} fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M27 55L6 33 9 29 26 41 55 12 59 16z"/></svg>
)
}

export default CorrectAnswer;