import React from 'react'
import store from "../store";
import {observer} from "mobx-react-lite";
import {Button, Card} from "antd";

const  CartItem = observer(({module}) => {
    const removeCartItem = () =>{
        store.deleteFromCart(module)
    }

    return(
        <Card title={module.name} extra={<Button type="primary" shape="circle" onClick={()=>removeCartItem()}>X</Button>} style={{ width: 300 }}>
            <img className='imgUrl' src={module.img} alt=""/>
            <h4 className='risk'>Risk: {module.risk * 100}%</h4>
            <h4 className='coverageTitle'>Coverage: {module.currentCov}</h4>
            <h3>Price: {module.price.toFixed(2)}</h3>
        </Card>
    )
})

export default CartItem