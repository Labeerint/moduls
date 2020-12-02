import {observer} from "mobx-react-lite";
import store from "../store";
import CartItem from "./CartItem";

const Cart = observer(() =>{
    return(
        <div className="Cart">
            {
                store.cart.length === 0 ?
                    <h1>Your cart is empty</h1>
                    : <div >
                        <h2>Total price: {store.totalPrice.toFixed(2)}</h2>
                        <h1>Your modules:</h1>
                        <div className='cart__products'>
                            {store.cart.map((i, index) => <CartItem key={'cart'+i.id +'_'+index} module={i} />)}
                        </div>
                    </div>
            }
        </div>
    )
})

export default Cart