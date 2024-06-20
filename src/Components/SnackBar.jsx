import React from 'react'

function SnackBar({name}) {
    return ( 
        <>
        <div className='fixed z-0 text-white flex items-center p-5  bg-red-600 h-10  rounded-full  bottom-0 left-1/2'>
            <h1 className=''>{name} has been added to your cart ! </h1>
        </div>
        </>
    );
}

export default SnackBar;