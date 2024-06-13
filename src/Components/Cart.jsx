import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'


function Cart({cartItems}) {
    return (
        <div className='border-2 rounded-xl'>
            <h1 className='text-lg p-1 border-2 block'>Products</h1>
            <div className='flex flex-col'>
            {cartItems.map((i) => (
                <div key={i.id+ "InCart"} className='flex border-b-2 items-center '>
                    <img src={i.image} alt={i.name} className='w-32' />
                    <h2 className='text-lg px-2'>{i.name}</h2>
                    <div className='border-2 flex items-center rounded-lg mx-5'>
                        <FontAwesomeIcon icon={faMinus} className='px-2 hover:text-red-700'/>
                        <h3>  {i.quantity} </h3>
                        <FontAwesomeIcon icon={faPlus} className='px-2 hover:text-blue-700'/>
                    </div>
                    <h2> $ {i.price * i.quantity}</h2>
                </div>
            ))}
            </div>            
        </div>
    );
}

export default Cart;