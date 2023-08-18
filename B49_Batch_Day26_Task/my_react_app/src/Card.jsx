import React from 'react'

function Card({item}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card text-center" style={{ width: "auto", height: "25rem" }}>
                <img src={item.imageurl} className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-outline-secondary w-25 text-center">More..</button>



                </div>
            </div>
        </div>
    )
}

export default Card