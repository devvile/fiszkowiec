import MenuItem from "./MenuItem"; 

const Menu = (props) =>{
    return (
    <ul>
        {props.items.map(item=>{
            return <MenuItem itemData={item} key={Math.random()}></MenuItem>
        })}
    </ul>
    )
}

export default Menu;