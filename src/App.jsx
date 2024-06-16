import React,{useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SearchComponent from './Components/SearchComponent'
import ShowItems from './Components/ShowItems';
import Cart from './Components/Cart'

function App() {
    const [items,setItems] = useState([
        {
            id:1,
            name:"Vennicornia T-shirt for girl",
            price:350,
            image:"src/img/playera-vennicornia-m-2024.png",
            tags:["kids"]
        },
        {
            id:2,
            name:"B & W Retro Jersey S2024",
            price:900,
            image:"src/img/casaca-negra-retro-m.jpg",
            tags:["female","male"]
        },
        {
            id:3,
            name:"Serie del Caribe 2024 Jersey ",
            price:1200,
            image:"src/img/jersey-sdc-verde-h-2024.jpg",
            tags:["male"]
        },
        {
            id:4,
            name:"Venados Summer Jersey 2024",
            price:1300,
            image:"src/img/jersey-palmas-verano-h.png",
            tags:["female"]
        },
        {
            id:5,
            name:"Venados X MS 2024",
            price:1300,
            image:"src/img/jersey-banda-ms-roja-m.png",
            tags:["female,male,kids"]
        }
    ])

    const [cartItems, setCartItems] = useState([]);
    const [searchItem,setSearchItem] = useState('');

    function addItemToCart (item){

        const newItem = cartItems.find((i) => i.id === item.id);
        if(newItem){
            const newItems = cartItems.map((i) => 
                i.id === item.id ? {...i, quantity:i.quantity + 1} : i
            );
            setCartItems(newItems);
        }
        else{
            setCartItems([...cartItems,{...item,quantity:1}]);
        }        
    }

    function searchProductsByQuery (e) {
        setSearchItem(e.target.value);
    }

    function addItem(i){
        let newItems = cartItems.map((cartI) => {
            if (cartI.id === i.id){
                return {...cartI, quantity:cartI.quantity + 1}
            }
            else {
                return cartI
            }
        })
        setCartItems(newItems)
        console.log(i)
    }
    function deleteItem(i){
        if(i.quantity > 1){
            let newItems = cartItems.map((cartI) => {
                if (cartI.id === i.id){
                    return {...cartI, quantity:cartI.quantity - 1}
                }
                else {
                    return cartI
                }
            }) 
            setCartItems(newItems)
        } 
    }

    const filteredItems = items.filter((i) => i.name.toLowerCase().includes(searchItem))
    return (
        <div className='App'>                                    
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<SearchComponent searchProductsByQuery={searchProductsByQuery} searchItem={searchItem}/>}>
                        <Route index  element={<ShowItems filteredItems={filteredItems} addItemToCart={addItemToCart}/>}/>
                        <Route path="cart" element={<Cart cartItems={cartItems} addItem={addItem} deleteItem={deleteItem}/>}/>                    
                    </Route>
                </Routes>            
            </BrowserRouter>
        </div>
    );
}

export default App;