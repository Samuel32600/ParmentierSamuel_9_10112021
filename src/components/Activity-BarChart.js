import React from 'react'
import axios from 'axios'

import '../styles/activity.css'

class Activity extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {}
    }
    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        const Type = "/activity"
        axios.get(AdressLink + UserIdentification + Type)

    }

    render() {
        return (
            <div className='container-activity'>

                {/* <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart> */}

            </div>
        )
    }
}

export default Activity