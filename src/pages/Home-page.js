import React from 'react'
import axios from 'axios'

import '../styles/home-page.css'

// import des components
import Activity from '../components/Activity-BarChart.js'
import TimingSession from '../components/TimingSession-LineChart.js'
import RadarPerformance from '../components/Radar-RadarChart.js'
import KPI from '../components/KPI-PieChart.js'
import Tag from '../components/Tag.js'
import CallAPI from '../data/Axios-API.js'

//import des icones Tags
import logo_Calories from '../assets/Calories.png'
import logo_Proteines from '../assets/Proteines.png'
import logo_Glucides from '../assets/Glucides.png'
import logo_Lipides from '../assets/Lipides.png'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {
            firstName: "",
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
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
                // console.log(Information.keyData.calorieCount, "Calories")
                // console.log(Information.keyData.proteinCount, "Protéines")
                // console.log(Information.keyData.carbohydrateCount, "Glucides")
                // console.log(Information.keyData.lipidCount, "Lipides")

                //remplissage des données
                this.setState(() => ({
                    firstName: Information.userInfos.firstName,
                    calorieCount: ((Information.keyData.calorieCount) / 1000) ,
                    proteinCount: (Information.keyData.proteinCount),
                    carbohydrateCount: (Information.keyData.carbohydrateCount),
                    lipidCount: (Information.keyData.lipidCount)
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
                <div className='container-allGraphic-allTags'>
                    <div className='container-allgraphic'>
                        <Activity />
                        <div className='container-small-graphic'>
                            <TimingSession />
                            <RadarPerformance />
                            <KPI />
                        </div>
                    </div>
                    <div className='container-allTags'>
                        <Tag iconTag={logo_Calories} valueOfTag={this.state.calorieCount} unitOfTag={"KCal"} textOfTag={"Calories"} />
                        <Tag iconTag={logo_Proteines} valueOfTag={this.state.proteinCount} unitOfTag={"g"} textOfTag={"Protéines"} />
                        <Tag iconTag={logo_Glucides} valueOfTag={this.state.proteinCount} unitOfTag={"g"} textOfTag={"Glucides"} />
                        <Tag iconTag={logo_Lipides} valueOfTag={this.state.lipidCount} unitOfTag={"g"} textOfTag={"Lipides"} />
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage


