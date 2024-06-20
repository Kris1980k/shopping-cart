import React,{useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faUser,faSignOut,faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons'
import {Outlet, Link} from 'react-router-dom'
function SearchComponent({searchProductsByQuery,searchItem}) {
    let slideIndex = 1;

    function deployHamburgerMenu (){
        let menu = document.getElementById("hamburger-menu");
        if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden");
            menu.classList.add("block")
        } else {
            menu.classList.add("hidden");
            menu.classList.remove("block")
        }
    }

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("img");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }        
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides,3000);
      }

    useEffect(() => {
        
        showSlides();

    },[])
    return (
        <>
        <header style={{'backgroundSize': "100% 100%"}} className='App-header bg-cover'>
            <div className="search-bar bg-white px-4 py-2 flex items-center">
            <div className="gallery xl:block lg:block md:block hidden xl:w-2/6 lg:w-2/6 md:w-2/6 sm:w-2/6 h-full shadow-black shadow-inner">
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_1.jpg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_2.jpeg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_3.png" alt="" />
                </div>
                <div className="img">
                    <img className="gal-img prevent-select-img" src="src/img/gallery/gallery_4.jpg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_5.jpg" alt="" />
                </div>
            </div>
            
            <Link to="/" className=' xl:w-80 xl:h-24 xl:block xl:mx-10 lg:mx-16 md:mx-16 sm:mx-16 mx-0  '>
                <img src="src\img\banner-venados.png" className='logo xl:block lg:block md:inline-block transition-all hidden border-red-600 prevent-select-img w-full h-24 ' alt="Venados logo" />
            </Link>

            <Link to="/" className='xl:hidden lg:hidden md:hidden sm:hidden w-20 mx-2 h-20'>
                <img src="src\img\venados-logo.png" className='xl:hidden lg:hidden md:hidden sm:hidden prevent-select-img w-20 h-20 ' alt="Venados logo mobile" />
            </Link>

                <div className='xl:w-3/6 lg:w-full md:w-full sm:w-full w-7/12 xl:mx-4 lg:mx-4 md:mx-4 sm:mx-4'>
                    <div className='border-2 xl:flex lg:flex md:flex sm:flex flex items-center '>
                        <input 
                        type="text"
                        placeholder='Search your products'    
                        className='search-input rounded-lg  p-1 h-14 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-md xl:px-4 lg:px-4 md:px-2 sm:px-4 px-2 transition-all xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-10/12'     
                        value={searchItem}
                        onChange={searchProductsByQuery}
                    />                
                        <div className='h-14 flex items-center border-l-2 w-20 hover:bg-red-600 m-glass-div transition-colors'>
                            <Link to="/" className='w-full'>
                            <FontAwesomeIcon className='w-full float-right xl:h-5 lg:h-5 md:h-5 sm:h-5 h-5 text-gray-400 m-glass transition-colors' icon={faMagnifyingGlass} />
                            </Link>
                        </div>                    
                    </div>
                </div>
                <div className='xl:w-72 lg:w-72 md:w-72 sm:w-72 xl:m-4 lg:m-4 md:m-4 sm:m-4 xl:overflow-visible lg:overflow-auto md:overflow-auto sm:overflow-auto xl:block lg:block md:block sm:block xl:px-4 lg:px-4 md:px-4 sm:px-4 items-center '>
                    <FontAwesomeIcon icon={faBars} className="text-red-600 h-10 ml-4 w-4  hover:scale-125 transition-transform xl:hidden lg:hidden md:hidden sm:hidden block" onClick={()=>{deployHamburgerMenu()}}/>
                    <div>
                    <ul id='hamburger-menu' className='xl:relative lg:relative md:relative sm:relative absolute xl:right-10 right-1 w-12 xl:border-0 lg:border-0 md:border-0 sm:border-0 border-2 xl:bg-transparent lg:bg-transparent md:bg-transparent sm:bg-transparent bg-white xl:flex lg:flex md:flex sm:flex z-20'>
                        <li>
                        <Link to="/cart"> 
                            <FontAwesomeIcon icon={faCartShopping} className='text-red-600 h-6 p-4  hover:scale-125 hover:text-white transition-transform xl:block lg:block md:block sm:block' /> 
                        </Link>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faUser} className=' text-red-600 h-6 p-4 hover:scale-125 hover:text-white transition-transform xl:block lg:block md:block sm:block' />
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faSignOut} className='text-red-600 h-6 p-4 hover:scale-125 hover:text-white transition-transform xl:block lg:block md:block sm:block'/>
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
            <nav className='bg-red-600 text-white h-10 items-center flex w-full xl:overflow-auto lg:overflow-auto md:overflow-auto sm:overflow-auto overflow-scroll '>
                <div className='inline-block  h-full px-4 '>
                    <div className='flex p-3 h-full items-center hover:bg-red-700 transition-all xl:shadow-lg lg:shadow-lg md:shadow-lg sm:shadow-lg xl:hover:shadow-red-800 lg:hover:shadow-red-800 md:hover:shadow-red-800 sm:hover:shadow-red-800'>
                        <p className='xl:text-xl lg:text-xl md:text-xl text-sm'>Home</p>
                    </div>
                </div>
                <ul className='float-end h-full flex items-center xl:overflow-visible lg:overflow-auto md:overflow-auto sm:overflow-auto overflow-scroll'>
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'>Female</li>
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Male</li>
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Kids</li>    
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li> 
                <li className='xl:text-lg xl:w-14 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                </ul>                                        
            </nav>
        </header>
        <Outlet/>
        </>
    );
}

export default SearchComponent;