import React from 'react'
import '../styles/left-nav-bar.css'

import Yoga from '../assets/yoga.png';
import Swimming from'../assets/swimming.png'
import Cycling from'../assets/cycling.png'
import Bodybuilding from'../assets/bodybuilding.png'

import { Link } from 'react-router-dom';

class NavBarLeft extends React.Component {
    
    render() {
        return (
            <nav className='container-Left-nav-bar'>                
                    <ul className='left-nav'>
                        <li >
                            <Link className='nav-icon' to="/">
                                <img src={Yoga} className='icon' alt='logo Yoga' />
                            </Link>
                        </li>
                        <li >
                            <Link className='nav-icon' to="/">
                                <img src={Swimming} className='icon' alt='logo Natation' />
                            </Link>
                        </li>
                        <li >
                            <Link className='nav-icon' to="/">
                                <img src={Cycling} className='icon' alt='logo Cyclisme' />
                            </Link>
                        </li> 
                        <li >
                            <Link className='nav-icon' to="/">
                                <img src={Bodybuilding} className='icon' alt='logo Musculation' />
                            </Link>
                        </li>                          
                    </ul>
                    <p className='text-nav-bar'>
                        Copiryght, SportSee 2020
                    </p>                
            </nav>
        )
    }
}

export default NavBarLeft