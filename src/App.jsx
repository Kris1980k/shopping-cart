import React,{useState} from 'react'
import './App.css'
import SearchComponent from './Components/SearchComponent'
import ShowItems from './Components/ShowItems';

function App() {
    const [items,setItems] = useState([
        {
            id:1,
            name:"Vennicornia T-shirt for girl",
            price:350,
            image:"src/img/playera-vennicornia-m-2024.png"
        },
        {
            id:2,
            name:"B & W Retro Jersey S2024",
            price:900,
            image:"src/img/casaca-negra-retro-m.jpg"
        },
        {
            id:3,
            name:"Serie del Caribe 2024 Jersey ",
            price:1200,
            image:"src/img/jersey-sdc-verde-h-2024.jpg"
        }
    ])

    const [cartItems, setCartItems] = useState([]);
    const [searchItem,setSearchItem] = useState('');


    return (
        <div className='App'>
            <SearchComponent/>
            <ShowItems items={items}/>
        </div>
    );
}

export default App;