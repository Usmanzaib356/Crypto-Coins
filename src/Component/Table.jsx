import React from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom' 
import { useEffect } from 'react'
import { useState } from 'react'
function Table() {
const[data,setData]=useState([])
 
let url = `https://api.coingecko.com/api/v3/coins/`

useEffect(()=>{ 
  axios.get(url).then(
    (res)=>{
     setData(res.data)
    }
  ).catch(
    (err)=>{
      console.log(err)
    }
  )
},[])


  return (
   <>
    <div>
        <br />
     <div>
        <br />
        <br />
        <h1  id="hero"> <b> Today's Cryptocurrency Prices by Market Cap </b> </h1>
        <p className='text-white-50 text-center'>  The global crypto market cap is $1.06T, a 0.57% increase over the last day</p>
     </div>
        <br />
    </div>
   

<div id='no-more-table'>
    <table class="table">
  <thead className='text-info'>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
      <th>1h%</th>
      <th>24h%</th>
      <th>7d%</th>
      <th>Market Cap</th>
      <th>Volume(24h)</th>
      <th>Circulating Supply</th>
      <th>Last 7 Days</th>
    </tr>
  </thead>
  <tbody className='text-light'>
    {data.map((item)=>{
      return(
        <>
       <tr >  
      <td id='id'>{item.market_data.market_cap_rank}</td>
      <td>
        <img id='logo' src={item.image.small} alt="" />
         <Link to={`table/${item.id}`}id='coins'> <b >  {item.name}  </b>   </Link>
          <b id='coins_short_name'> {item.symbol} </b>
          </td>
      <td id='price'>${item.market_data.current_price.usd}</td>
      <td id='one-hour'>{item.market_data.price_change_percentage_1h_in_currency.usd}%</td>
      <td id='tweenty-four-hour'>{item.market_data.price_change_percentage_24h_in_currency.usd}%</td>
      <td id='seven-days'>{item.market_data.price_change_percentage_7d_in_currency.usd}%</td>
      <td id='market-cap'>${item.market_data.market_cap.usd}</td>
      <td id='volume'>${item.market_data.high_24h.usd}</td>
      <td id='supply'>{item.market_data.total_supply}</td>
      <td><img src={`https://www.coingecko.com/coins/${item.market_data.market_cap_rank}/sparkline`} alt="" /></td>
     </tr>
     </>
      )
    })}
  </tbody>
</table>
</div>

    </>
  )
}

export default Table