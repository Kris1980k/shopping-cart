import React from 'react';
import SnackBar from './SnackBar'
function ShowItems({filteredItems,addItemToCart}) {
    return (
        <div className="product-list grid xl:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 sm:w-128 w-full h-screen ">
            {
            filteredItems.length > 0 ?
                filteredItems.map((i) => (
                <div  className='overflow-clip lg:hover:scale-105 transition-transform prevent-select product shadow-xl border-2  bg-white p-3 xl:h-128 lg:h-128 md:h-128 sm:h-128 ' key={i.id}>
                    <img className='prevent-select-img xl:w-full sm:w-52 xl:h-56:h-10' src={i.image} alt={i.name} />
                    <h2 className='xl:text-lg sm:text-2xl xl:my-2 lg:my-2 md:my-2 sm:my-2 px-4 text-red-600 text-right w-full xl:h-8'>{i.name}</h2>
                    <h3 className='xl:text-lg sm:text-2xl px-4 py-2  text-black text-right xl:h-10'>{i.price} $</h3>

                    <button onClick={()=>{addItemToCart(i)}} className='bg-red-700 text-white p-2 m-auto rounded-3xl float-right hover:shadow-lg hover:shadow-black/50 hover:bg-red-800 xl:w-28 lg:w-full sm:w-32 text-center'>Add to cart</button>
                </div>
                )) : 
                    <div className='h-full items-center col-span-full'>
                        <h1 className='text-2xl text-center text-gray-400 p-4 prevent-select'>No products were found matching your search...</h1>  
                    </div>          
            } 
            <div></div>
            <SnackBar name="BOOB" className=""/>
        </div>
    );
}

export default ShowItems;