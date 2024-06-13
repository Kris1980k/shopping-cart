import React from 'react';

function ShowItems({filteredItems,addItemToCart}) {
    return (
        <div className="product-list flex w-128">
            {console.log(filteredItems)}
            {filteredItems.map((i) => (
                <div  className=' hover:scale-105 transition-transform prevent-select product shadow-xl w-1/5 bg-white p-3'  key={i.id}>
                    <img className='prevent-select-img w-96' src={i.image} alt={i.name} />
                    <h2 className='px-4 text-lg text-red-600 text-right'>{i.name}</h2>
                    <h3 className='text-lg px-4 text-black text-right'>{i.price} $</h3>

                    <button onClick={()=>{addItemToCart(i)}} className='bg-red-600 text-white p-2 m-2 rounded-3xl float-right hover:shadow-lg hover:shadow-black/50 hover:bg-red-700'>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default ShowItems;