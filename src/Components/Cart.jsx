import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus,faDollar} from '@fortawesome/free-solid-svg-icons'


function Cart({cartItems,addItem, deleteItem}) {
    return (
        <div className=' flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col xl:my-4 lg:my-4 md:my-4 sm:my-4 '>            
            <div className=' flex flex-col xl:shadow-2xl shadow-black xl:w-4/6 xl:m-3'>
            <h1 className='xl:text-3xl xl:px-12 xl:py-1 border-b-2 block'>Products</h1>
            {
            cartItems.length > 0 ? 
            cartItems.map((i) => (
                <div key={i.id+ "InCart"} className='flex border-b-2 items-center '>
                    <img src={i.image} alt={i.name} className='xl:w-44 lg:w-44 md:w-44 sm:w-44 w-24 xl:h-44 lg:h-44 md:h-44 sm:h-44 h-24 prevent-select-img' />
                    <h2 className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-md xl:w-52 lg:w-52 md:w-52 sm:w-52 w-40 xl:px-2 prevent-select'>{i.name}</h2>
                    <div className='border-2 flex items-center rounded-lg xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 mx-2'>
                        <FontAwesomeIcon icon={faMinus} className='prevent-select px-2 hover:text-red-700' onClick={() => {deleteItem(i)}}/>
                        <h3 className='prevent-select xl:text-lg'>  {i.quantity} </h3>
                        <FontAwesomeIcon icon={faPlus} className='prevent-select px-2 hover:text-blue-700' onClick={() => {addItem(i)}}/>
                    </div>
                    <h2 className='xl:w-16 xl:text-xl prevent-select'> 
                    <FontAwesomeIcon icon={faDollar} className='xl:text-lg'/> 
                            {i.price * i.quantity}</h2>
                </div>
            )) :
            
            <div className='items-center h-max'>
                <h1 className='text-gray-400  text-xl text-center p-32'> Your cart is empty </h1>
            </div>
            
            }            
            </div>            
            <div className='xl:px-10 lg:px-10 md:px-10 sm:px-10 px-2 fixed xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 w-full bottom-0 right-4 xl:h-128 lg:h-128 md:h-128 sm:h-128 h-40 border-2'>                        
                <div className=' w-full xl:shadow-2xl shadow-black h-full  '>            
                    <div className='xl:px-4 xl:py-2 border-b-2'>
                        <h1 className='xl:text-3xl'>Resume</h1>
                    </div>
                    <div className='xl:m-2'>
                        <div className='xl:h-72'></div>
                        <h1 className=' xl:text-2xl xl:px-2 xl:py-2 inline '>Total</h1>
                        <h2 className=' xl:text-2xl xl:px-2 xl:py-2 inline float-right'>
                        <FontAwesomeIcon icon={faDollar} className='xl:text-xl'/>                         
                        {cartItems.reduce((c,i) => 
                            c + (i.price * i.quantity)
                        ,0)}
                        </h2>      
                        <button className='bg-green-600 hover:bg-gradient-to-tr xl:block hover:from-green-700 hover:to-green-500 hover:scale-105 transition  xl:h-12 xl:w-full xl:mx-auto xl:my-4  '>
                            <h2 className='xl:text-xl text-white'>Pay</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;