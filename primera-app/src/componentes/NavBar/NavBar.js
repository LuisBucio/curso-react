
import React from 'react';

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BL Swagger </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Audifonos</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">Accesorios</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Celulares
                    </a>
                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item nav-link" href="#">Apple</a></li>
                    <li><a class="dropdown-item nav-link" href="#">Xiaomi</a></li>
                    <li><a class="dropdown-item nav-link" href="#">Samsung</a></li>
                    <li><a class="dropdown-item nav-link" href="#">Oppo</a></li>
                </ul>
                </li> 
            </ul>
            </div>
        </div>
</nav>
    )
}

export default NavBar