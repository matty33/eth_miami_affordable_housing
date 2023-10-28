
import React from 'react'
import Navigationbar from './Navbar/Navigationbar'
import Unlock from './Unlock/Unlock'
import Router from 'next/router'

function Home() {
  return (
    <div>
      <Unlock />
      <section className="propy"></section>
      <section className='propy2'></section>
    </div>

    
  )
}

export default Home