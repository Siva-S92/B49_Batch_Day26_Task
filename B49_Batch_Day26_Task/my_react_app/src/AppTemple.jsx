import React from 'react'
import Header from './Header'
import temple_data from './TempleData'

function AppTemple() {
    return (
        <>
            {/* <Header/> */}
            <div className='container container-fluid my-3'>
                <div className='row justify-content-center'>
                    {temple_data.map((ele, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-2">
                            <div className="card text-center" style={{ width: "auto", height: "25rem" }}>
                                <img src={ele.imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <p className="card-text">{ele.description}</p>
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

export default AppTemple