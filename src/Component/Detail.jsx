import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const[coin,setCoin]=useState("")
    const params = useParams()
     let url = `https://api.coingecko.com/api/v3/coins/${params.coingecko_rank}`    
    useEffect(()=>{
        axios.get(url).then(
            (res)=>{
                setCoin(res.data.market_data.current_price)
                setCoin(res.data.market_data.price_change_percentage_1h_in_currency)
                setCoin(res.data.market_data.price_change_percentage_7d_in_currency)
                setCoin(res.data.market_data.price_change_percentage_1y_in_currency)
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[]) 
  return (
    <>
    <br />
    <br />
    <table class="table text-warning container">
  <thead className='text-info'>
    <tr>
      <th scope="col">Price</th>
      <th scope="col">1h%</th>
      <th scope="col">7D%</th>
      <th scope="col">1Y%</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td id='one-hour'>{coin.usd}</td>
      <td id='price'>{coin.usd}%</td>
      <td id='tweenty-four-hour'>{coin.usd}%</td>
      <td id='seven-days'>{coin.usd}%</td>
    </tr>
    
  </tbody>
</table>
    </>
  )
}

export default Detail