"use client";
import React, { useState } from 'react'
import { SearchManufacturer } from '.';

const SearchBar = () => {
    const [manuFacture, setManufacture] = useState('')
    const handleSearch = ( ) =>{

    }
  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
     <SearchManufacturer
    manuFacture={manuFacture}
    setManufacture={setManufacture}
     
     />
    </div>
   </form>
  )
}

export default SearchBar