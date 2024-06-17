import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'


function Cart({cartItems,addItem, deleteItem}) {
    return (
        <div className=' flex flex-row '>            
            <div className=' flex flex-col xl:shadow-2xl shadow-black xl:w-2/3 xl:m-3'>
            <h1 className='text-2xl xl:px-12 xl:py-2 border-b-2 block'>Products</h1>
            {
            cartItems.length > 0 ? 
            cartItems.map((i) => (
                <div key={i.id+ "InCart"} className='flex border-b-2 items-center '>
                    <img src={i.image} alt={i.name} className='xl:w-52 xl:h-52 prevent-select-img' />
                    <h2 className='xl:text-xl xl:w-72 px-2 prevent-select'>{i.name}</h2>
                    <div className='border-2 flex items-center rounded-lg mx-5'>
                        <FontAwesomeIcon icon={faMinus} className='prevent-select px-2 hover:text-red-700' onClick={() => {deleteItem(i)}}/>
                        <h3 className='prevent-select'>  {i.quantity} </h3>
                        <FontAwesomeIcon icon={faPlus} className='prevent-select px-2 hover:text-blue-700' onClick={() => {addItem(i)}}/>
                    </div>
                    <h2 className='xl:w-14 xl:text-md prevent-select'> $ {i.price * i.quantity}</h2>
                </div>
            )) :
            
            <div className='items-center h-max'>
                <h1 className='text-gray-400  text-xl text-center p-32'> Your cart is empty </h1>
            </div>
            
            }            
            </div>            
            <div className='m-10 w-1/3 flex flex-col items-center xl:shadow-2xl shadow-black xl:p-10 '>
                <h1 className=' xl:text-3xl px-4'>Total</h1>
                <h2 className='xl:text-2xl p-6'> $ 
                {cartItems.reduce((c,i) => 
                    c + (i.price * i.quantity)
                ,0)}
                <hr />
                </h2>                
                <button className='bg-green-600 hover:bg-gradient-to-tr hover:from-green-700 hover:to-green-500 hover:scale-105 transition rounded-md p-2 xl:w-52'>
                    <h2 className='xl:text-xl text-white'>Pay</h2>
                </button>
            </div>
        </div>
    );
}

export default Cart;