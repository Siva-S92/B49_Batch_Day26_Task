import React from 'react'
import Header from './Header'
import parks_data from './Parks_Data'

function APP_Parks() {
    return (
        <>
            {/* <Header /> */}
            <div className='container container-fluid my-3'>
                <div className='row justify-content-center'>
                    {parks_data.map((content, index) => (
                        <div key={index} className="col-md-6 col-sm-12 my-2">
                            <div className="card text-center" style={{ width: "auto", height: "35rem" }}>
                                <img src={content.imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "70%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{content.name}</h5>
                                    <p className="card-text">{content.description}</p>
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

export default APP_Parks