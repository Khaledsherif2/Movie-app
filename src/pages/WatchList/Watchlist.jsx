import React from 'react'
import './Watchlist.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import CardWatchlist from '../../components/Card-Watchlist/Card-Watchlist'

function Watchlist() {
  return (
    <div className='Watch'> 
        <Navbar/>
        <Header name= 'Watch List' />
        <div className="watchlist-card-container">
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
            <CardWatchlist/>
        </div>
      

    
    </div>
  )
}

export default Watchlist