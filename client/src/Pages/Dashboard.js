import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';


const Dashboard = () => {

  const [search, setSearch] = useState('')


  
    return(
      <div>
        <Navbar />
        <div className='Search-bar'>
          <form onSubmit={getSearch}className='search-form'>
            <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
            <button className='search-button' type='submit'>
          Search
        </button>

          </form>

        </div>
      </div>
    )
  
}