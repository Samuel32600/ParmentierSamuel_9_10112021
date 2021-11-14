import React from 'react'
import axios from 'axios'

import Activity from '../components/Activity-BarChart.js'
import '../styles/home-page.css'




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
        const UserIdentification = 12;
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

                <Activity/>


            </div>
        )
    }
}

export default HomePage