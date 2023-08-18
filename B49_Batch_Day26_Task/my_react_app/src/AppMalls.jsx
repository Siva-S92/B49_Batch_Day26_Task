import React from 'react'
import Header from './Header'
import malls_data from './MallData'

function AppMalls() {
  return (
    <>
            {/* <Header/> */}
            <div className='container container-fluid my-3'>
                <div className='row justify-content-center'>
                    {malls_data.map((values, index) => (
                        <div key={index} className="col-md-6 col-sm-12 my-2">
                            <div className="card text-center" style={{ width: "auto", height: "35rem" }}>
                                <img src={values.imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "70%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{values.name}</h5>
                                    <p className="card-text">{values.description}</p>
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

export default AppMalls