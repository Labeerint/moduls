import {Link} from "react-router-dom";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import store from '../store'
import {observer} from "mobx-react-lite";
import React from "react";
import {Layout, Badge} from "antd";
const { Header} = Layout;


const HeaderApp = observer(() =>{
    return(
        <Header className="header">
            <Link to='/' className='header__item header__title'>Modules</Link>
            <Link to='/cart' className='header__item header__cart'>
                    {store.cartCounter !==0 &&
                        <Badge count={store.cartCounter}>
                        </Badge>}
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Link>
        </Header>
    )
})

export default HeaderApp