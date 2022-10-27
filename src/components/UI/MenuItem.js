import './MenuItem.css'

const MenuItem = (props) => {
    return(
        <li className="menu__item">{props.itemData.name}</li>
    )
}

export default MenuItem;