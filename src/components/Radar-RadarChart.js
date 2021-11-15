import React from 'react'
import axios from 'axios'

import '../styles/radar.css'

class Radar extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {}
    }
    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        const Type = "/performance"
        axios.get(AdressLink + UserIdentification + Type)            
            
    }

    render() {
        return (
            <div className='container-radar'>

            </div>
        )
    }
}

export default Radar