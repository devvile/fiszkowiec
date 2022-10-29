import MenuItem from "./MenuItem"; 
import './Menu.css'

const Menu = (props) =>{
    const clickedItemHandler = (itemName)=>{
        props.menuClick(itemName)
    };


    return (
    <ul className="menu">
        {props.items.map(item=>{
            return <MenuItem itemData={item} key={Math.random()} getClickedItem={clickedItemHandler}></MenuItem>
        })}
    </ul>
    )
}

export default Menu;