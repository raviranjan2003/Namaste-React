import React from 'react';
import ItemList from './ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItem = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
            <button 
                className='m-2 p-2 bg-black text-white rounded-lg'
                onClick={handleClearCart}
                disabled={!cartItem.length}
            >Clear Cart</button>
            {!cartItem.length && <h1>Cart is Empty, add some items to cart!</h1>}
            <ItemList items={cartItem}/>
        </div>
    </div>
  )
}

export default Cart;