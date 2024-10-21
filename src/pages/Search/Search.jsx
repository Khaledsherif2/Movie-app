import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Card from "../../components/Card/Card";


import './Search.css'

function Search() {
  return (

    <div className='Search'> 
    <Navbar/>
    <Header name= 'Search' />
    <div className="watchlist-card-container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  


</div>



    
  )
}

export default Search