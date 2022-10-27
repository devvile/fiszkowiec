import './MenuItem.css'

const MenuItem = (props) => {
    const menuItemClickHandler = (e)=>{
        props.getClickedItem(e.target.dataset.value);
    }

    return(
        <li className="menu__item" >< div onClick={menuItemClickHandler} data-value={props.itemData.name}>{props.itemData.name}</div></li>
    )
}

export default MenuItem;