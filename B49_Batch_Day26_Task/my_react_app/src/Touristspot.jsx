import React from 'react'
import Header from './Header'
import touristspot_data from './TouristData'

function Touristspot() {
  return (
    <>
            {/* <Header /> */}
            <div className='container container-fluid my-3'>
                <div className='row justify-content-center'>
                    {touristspot_data.map((element, index) => (
                        <div key={index} className="col-md-6 col-sm-12 my-2">
                            <div className="card text-center" style={{ width: "auto", height: "35rem" }}>
                                <img src={element.imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "70%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.description}</p>
                                    <button className="btn btn-outline-secondary w-25 text-center">More..</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
  )
}

export default Touristspot