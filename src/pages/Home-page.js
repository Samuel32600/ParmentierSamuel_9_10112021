import React from 'react'
import axios from 'axios'

import '../styles/home-page.css'

// import des components
import Activity from '../components/Activity-BarChart.js'
import TimingSession from '../components/TimingSession-LineChart.js'
import Radar from '../components/Radar-RadarChart.js'
import KPI from '../components/KPI-RadialBarChart.js'




class HomePage extends React.Component {
    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {
            firstName: "",
            calorieCount: "",
            proteinCount: "",
            carbohydrateCount: "",
            lipidCount: "",
        }
    }

    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        axios.get(AdressLink + UserIdentification)

            .then((request) => {
                const Information = request.data.data;
                //appel dans la console
                // console.log(Information.userInfos.firstName)
                // console.log(Information.keyData.calorieCount, "calories")
                // console.log(Information.keyData.proteinCount, "protéines")
                // console.log(Information.keyData.carbohydrateCount, "glucides")
                // console.log(Information.keyData.lipidCount, "lipides")

                //remplissage des données
                this.setState(() => ({
                    firstName: Information.userInfos.firstName,
                }))
            })
    }


    render() {
        return (
            <div className='container-home-page'>
                <div className='box-title'>
                    <h1 className='title'>Bonjour <span className='firstName'>{this.state.firstName}</span> </h1>
                    <h2 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>

                <div className='container-graphic'>
                    <Activity />
                    <div className='container-small-graphic'>
                        <TimingSession/>
                        <Radar/>
                        <KPI/>
                    </div>
                </div>




            </div>
        )
    }
}

export default HomePage