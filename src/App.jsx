import React from "react";
import "./style.css"
import { Routes,Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";
import Cryptocurrencies from "./Component/Cryptocurrencies";
import Exchanges from "./Component/Exchanges";
import Community from "./Component/Community";
import Products from "./Component/Products";
import Learn from "./Component/Learn";
import Detail from "./Component/Detail";
import CoinsMarketCap from "./Component/CoinsMarketCap";
function App() {
  return (
   <>
    <div>
     <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<CoinsMarketCap/>} />
        <Route path="/table" element={<Table/>} />
        <Route path="table/:coingecko_rank" element={<Detail/>} />    
        <Route path="cryptocurrencies" element={<Cryptocurrencies/>} />
        <Route path="exchanges" element={<Exchanges/>}/>
        <Route path="community" element={<Community/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="learn" element={<Learn/>}/>
      </Routes>
     </div>
     </div>
   </>
  );
}

export default App;
