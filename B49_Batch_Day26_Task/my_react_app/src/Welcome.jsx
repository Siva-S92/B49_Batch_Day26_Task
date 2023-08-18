import React from 'react'
import imageurl from './Image'

function Welcome() {
  return (
    <div className='container mt-2'>
        <img src={imageurl.url} alt="image not available"style={{width:"100%", height: "800px"}}/>
    </div>
  )
}

export default Welcome