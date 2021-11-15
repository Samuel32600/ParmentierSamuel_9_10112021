import React from 'react'
import axios from 'axios'
import '../styles/timingSession.css'

class TimingSession extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {}
    }
    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        const Type = "/average-sessions"
        axios.get(AdressLink + UserIdentification + Type)            
            
    }

    render() {
        return (
            <div className='container-timingSession'>

            </div>
        )
    }
}

export default TimingSession