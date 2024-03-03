import React, { useState } from 'react'
import View from '../components/View';
import Add from '../components/Add';

function Home() {

  const [reloadView,setReloadView]=useState("")

  return (
    <>
      <div className='container hh'>

        <Add setReloadView={setReloadView}/>
        
        <View reloadView={reloadView}/>

      </div>
    </>
  )
}

export default Home