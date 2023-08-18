import React from 'react'
import Header from './Header'
import Card from './Card'
import beach_data from './BeachData'

function AppBeach() {
  return (
    <>
      {/* <Header /> */}
      <div className='container container-fluid my-3'>
        <div className='row'>
          {beach_data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AppBeach