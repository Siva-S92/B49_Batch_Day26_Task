import React from 'react'
import Welcome from './Welcome'
import AppBeach from './AppBeach'
import AppTemple from './AppTemple'
import AppMalls from './AppMalls'
import APP_Parks from './APP_Parks'
import Touristspot from './Touristspot'



import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function Header() {
    return (
        <>
            <Router>
                <div className='make_group'>
                    <header className="bg-dark py-5 mt-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="text-center text-white">
                                <h1 className="display-4 fw-bolder">Roaming in chennai...</h1>
                                <p className="lead fw-normal text-white-50 mb-0">For tourists, picnic lovers, and solo riders</p>
                            </div>
                        </div>
                    </header>



                    <div className="container w-100 mt-2">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                            <div className="container-fluid px-5 w-100 ">
                                <a className="navbar-brand" href="#" style={{ color: "indigo", fontWeight: 'bold' }} >Chennai Spots</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-between">
                                        <li className="nav-item">
                                            <a><Link to="/beaches" className="nav-link active" aria-current="page">Beaches</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a><Link to="/devotional_places" className="nav-link active">Devotional places</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a><Link to="/shopping_malls" className="nav-link active" aria-current="page">Shopping Malls</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a><Link to="/theme_parks" className="nav-link active" aria-current="page">Theme Parks</Link></a>
                                        </li>

                                        <li className="nav-item">
                                            <a><Link to="/evening_spots" className="nav-link active" aria-current="page">Weekeend spots</Link></a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                others
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Gardens</a></li>
                                                <li><a className="dropdown-item" href="#">kids Park</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">New Spots</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" aria-disabled="true">solo traveling</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>




                <Routes>
                    <Route path='/' exact Component={Welcome}></Route>
                    <Route path='/beaches' Component={AppBeach}></Route>
                    <Route path='/devotional_places' Component={AppTemple}></Route>
                    <Route path='/shopping_malls' Component={AppMalls}></Route>
                    <Route path='/theme_parks' Component={APP_Parks}></Route>
                    <Route path='/evening_spots' Component={Touristspot}></Route>
                </Routes>
            </Router>

        </>
    )
}

export default Header