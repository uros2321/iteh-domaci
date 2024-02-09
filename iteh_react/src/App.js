
import './App.css';
import Body from './components/Body';
import FavoritesBody from './components/FavoritesBody';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Kontakt from "./components/Kontakt";

function App() {

  const [products] = useState([
    {
      id: 1,
      img: "https://www.stefanovic1886.com/wp-content/uploads/2019/06/NM039ID0200W.jpg",
      name: "Ogrlica - dijamant",
      price: 38000,
      favorite : false
    },
    {
      id: 2,
      img: "https://www.moonbeamshop.com/wp-content/uploads/2020/11/Angel-gold-scaled.jpg",
      name: "Ogrilca Angel - zlato",
      price: 21000,
      favorite : false
    },
    {
      id: 3,
      img: "https://www.zlatarafiera.rs/wp-content/uploads/2019/05/VP-300-22750-BZ.jpg",
      name: "Prsten - dijamant",
      price: 34000,
      favorite : false
    },
    {
      id: 4,
      img: "https://www.zlatarapanic.rs/images/stories/virtuemart/product/zlatne-narukvice26.jpg",
      name: "Narukvica - zlato",
      price: 12000,
      favorite : false
    },
    {
      id: 5,
      img: "https://www.pandorashop.rs/files/thumbs/files/images/slike_proizvoda/thumbs_350/592548C01_350_350px.jpg.webp",
      name: "Narukvica - belo zlato",
      price: 16000,
      favorite : false
    },
    {
      id: 6,
      img: "https://img5.lalafo.com/i/posters/original/35/db/a2/eb5ff51d13cdabe2b209e57be4.jpeg",
      name: "Nanogica - srebro",
      price: 7400,
      favorite : false
    }
  ])

  
  const [numFav, setNumFav]=useState(0)
  const [favProd, setFavProd]=useState([])
  
  const addFavorites = (id) =>{
    setNumFav(numFav+1)
    products.map((product)=>{
      if(product.id === id){
        product.favorite=true
      }
    })
    refreshFavorites()
  }

  const removeFavorite = (id) => {
    if(numFav>0){
      setNumFav(numFav-1)
    }
    products.map((product)=>{
      if(product.id === id){
        product.favorite=false
      }
    })
    refreshFavorites()
  }

  const refreshFavorites = () => {
    var newFav=products.filter((product)=>product.favorite===true)
    setFavProd(newFav)
  }

  return (
    <>
    <BrowserRouter>
      <Navbar numFavorite={numFav}></Navbar>
        <Routes>
          <Route path='/' element={
            <Body/>
          }/>
          <Route path='/products' element={
            <Products products={products} addFavorites={addFavorites} removeFavorite={removeFavorite}/>
          }/>
          <Route path='/favorites' element={
            <FavoritesBody products={favProd} removeFavorite={removeFavorite}/>
          }/>

          <Route path='/kontakt' element={
            <Kontakt />
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </>  
  );
}



export default App;
