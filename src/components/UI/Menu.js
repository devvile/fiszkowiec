import MenuItem from "./MenuItem"; 

const Menu = (props) =>{
    const clickedItemHandler = (itemName)=>{
        props.menuClick(itemName)
    };


    return (
    <ul>
        {props.items.map(item=>{
            return <MenuItem itemData={item} key={Math.random()} getClickedItem={clickedItemHandler}></MenuItem>
        })}
    </ul>
    )
}

export default Menu;