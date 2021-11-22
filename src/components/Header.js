import React from 'react'
import '../styles/header.css'

//import logo
import logo_header from '../assets/logo-header.png'

import { Link } from 'react-router-dom'

class Header extends React.Component {
    
    render() {
        return (
            <div className='container-header'>
                <img src={logo_header} className='logo-header' alt='logo SportSee' />
                <nav>
                    <ul className='nav-header'>
                        <li className='border'>
                            <Link className='nav-text' to="/">Accueil</Link>
                        </li>
                        <li className='border'>
                            <Link className='nav-text' to="/Profil">Profil</Link>
                        </li>
                        <li className='border'>
                            <Link className='nav-text' to="/Réglage">Réglage</Link>
                        </li>
                        <li className='border'>
                            <Link className='nav-text' to="/Communauté">Communauté</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header