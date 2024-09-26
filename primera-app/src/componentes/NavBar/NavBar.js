
import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">BL Swagger </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to='/category/Audifonos'className="nav-link">Audifonos</Link>
                </li>
                <li className="nav-item ">
                <Link to='/category/Accesorios'className="nav-link">Accesorios</Link>
                </li>
                <li className="nav-item dropdown">
                <Link to='/category/Celular' className="nav-link">Celular</Link>
                </li>
                <li className="nav-item">
                    
                </li>
                
            </ul>
                
            </div>
            <CardWidget/>
        </div>
       
    </nav>
    )
}

export default NavBar