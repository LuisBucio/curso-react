
import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand" href="#">BL Swagger </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to='/category/Audifonos'class="nav-link">Audifonos</Link>
                </li>
                <li class="nav-item ">
                <Link to='/category/Accesorios'class="nav-link">Accesorios</Link>
                </li>
                <li class="nav-item dropdown">
                <Link to='/category/Celular' class="nav-link">Celular</Link>
                </li>
                <li class="nav-item">
                    
                </li>
                
            </ul>
                
            </div>
            <CardWidget/>
        </div>
       
    </nav>
    )
}

export default NavBar