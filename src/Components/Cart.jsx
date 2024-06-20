import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus,faDollar} from '@fortawesome/free-solid-svg-icons'


function Cart({cartItems,addItem, deleteItem}) {
    return (
        <div className=' flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col xl:my-4 lg:my-4 md:my-4 sm:my-4 my-0'>            
            <div className=' flex flex-col xl:shadow-2xl shadow-black xl:w-8/12 xl:m-3 '>
                <h1 className='xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl  xl:px-8 lg:px-8 md:px-8 sm:px-8 px-2 xl:py-1 lg:py-1 md:py-1 sm:py-1 py-1 border-b-2 block'>Products</h1>
                <div className='xl:overflow-auto overflow-scroll xl:h-full lg:h-full md:h-full sm:h-full h-96'>
                    {
                    cartItems.length > 0 ? 
                    cartItems.map((i) => (
                        <div key={i.id+ "InCart"} className='flex border-b-2 items-center '>
                            <img src={i.image} alt={i.name} className='xl:w-44 lg:w-44 md:w-44 sm:w-44 w-24 xl:h-44 lg:h-44 md:h-44 sm:h-44 h-24 prevent-select-img' />
                            <h2 className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-md xl:w-52 lg:w-52 md:w-52 sm:w-52 w-32 xl:px-2 prevent-select'>{i.name}</h2>
                            <div className='border-2 flex items-center rounded-lg xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 mx-2'>
                                <FontAwesomeIcon icon={faMinus} className='prevent-select px-2 hover:text-red-700' onClick={() => {deleteItem(i)}}/>
                                <h3 className='prevent-select xl:text-lg'>  {i.quantity} </h3>
                                <FontAwesomeIcon icon={faPlus} className='prevent-select px-2 hover:text-blue-700' onClick={() => {addItem(i)}}/>
                            </div>
                             
                            <FontAwesomeIcon icon={faDollar} className='xl:text-lg lg:text-lg md:text-lg sm:text-lg text-md'/> 
                            <h2 className='xl:w-16 lg:w-16 md:w-16 sm:w-16 w-14 xl:text-xl lg:text-lg md:text-lg sm:text-lg text-md prevent-select'>
                            {i.price * i.quantity}</h2>
                        </div>
                    )) :
                    
                    <div className='items-center h-max'>
                        <h1 className='text-gray-400  text-xl text-center p-32'> Your cart is empty </h1>
                    </div>
                    
                    }    
                </div>        
            </div>            
            <div className=' xl:px-0 lg:px-0 md:px-0 sm:px-0 px-0 fixed xl:w-3/12 lg:w-1/3 md:w-1/3 sm:w-1/3 w-full xl:top-56 bottom-0 xl:right-4 lg:right-4 md:right-4 sm:right-4 xl:h-128 lg:h-128 md:h-128 sm:h-128 h-40 border-2 bg-white z-10'>                        
                <div className=' w-full xl:shadow-2xl shadow-black h-full'>            
                    <div className='xl:px-4 lg:px-4 md:px-4 sm:px-4 px-0  xl:py-2 lg:py-2 md:py-2 sm:py-2 py-1  border-b-2'>
                        <h1 className='xl:text-3xl xl:px-0 lg:px-0 md:px-0 sm:px-0 px-2 lg:text-3xl md:text-3xl sm:text-3xl text-2xl'>Resume</h1>
                    </div>
                    <div className='xl:m-2 m-2'>
                        <div className='xl:h-72'></div>
                        <h1 className=' xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl xl:px-2 xl:py-2 inline'>Total</h1>
                        <div className='float-right flex items-center'>
                            <h2 className=' xl:text-2xl xl:px-2 xl:py-2'>
                            <FontAwesomeIcon icon={faDollar} className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 mr-2'/>
                            </h2>
                            <h3 className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-xl '>
                            {cartItems.reduce((c,i) => 
                                c + (i.price * i.quantity)
                            ,0)}
                            </h3>
                        </div>                                                      
                        <button className='bg-green-600 hover:bg-gradient-to-tr xl:block lg:block md:block sm:block block hover:from-green-700 hover:to-green-500 hover:scale-105 transition  xl:h-12 lg:h-12 md:h-12 sm:h-12 h-12 xl:w-full lg:w-full md:w-full sm:w-full w-full xl:mx-auto xl:my-4 lg:my-4 md:my-4 sm:my-4 my-4  '>
                            <h2 className='xl:text-xl lg:text-xl md:text-xl sm:text-xl text-2xl text-white'>Pay</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;