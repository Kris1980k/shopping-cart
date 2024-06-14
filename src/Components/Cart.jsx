import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'


function Cart({cartItems,addItem, deleteItem}) {
    return (
        <div className='border-2 rounded-xl'>
            <h1 className='text-2xl p-1 border-2 block'>Products</h1>
            <div className='flex flex-col'>
            {
            cartItems.length > 0 ? 
            cartItems.map((i) => (
                <div key={i.id+ "InCart"} className='flex border-b-2 items-center '>
                    <img src={i.image} alt={i.name} className='w-32 prevent-select-img' />
                    <h2 className='text-lg px-2 prevent-select'>{i.name}</h2>
                    <div className='border-2 flex items-center rounded-lg mx-5'>
                        <FontAwesomeIcon icon={faMinus} className='prevent-select px-2 hover:text-red-700' onClick={() => {deleteItem(i)}}/>
                        <h3 className='prevent-select'>  {i.quantity} </h3>
                        <FontAwesomeIcon icon={faPlus} className='prevent-select px-2 hover:text-blue-700' onClick={() => {addItem(i)}}/>
                    </div>
                    <h2 className='prevent-select'> $ {i.price * i.quantity}</h2>
                </div>
            )) :
            
            <div className='items-center h-max'>
                <h1 className='text-gray-400  text-xl text-center p-32'> Your cart is empty </h1>
            </div>
            
            } 
            </div>            
        </div>
    );
}

export default Cart;