import React from 'react'
import axios from 'axios'

import '../styles/home-page.css'

// import des components
import Activity from '../components/Activity-BarChart.js'
import TimingSession from '../components/TimingSession-LineChart.js'
import RadarPerformance from '../components/Radar-RadarChart.js'
import KPI from '../components/KPI-PieChart.js'
import Tag from '../components/Tag.js'

//import des icones Tags
import logo_Calories from'../assets/Calories.png'
import logo_Proteines from'../assets/Proteines.png'
import logo_Glucides from'../assets/Glucides.png'
import logo_Lipides from'../assets/Lipides.png'

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
                console.log(Information.keyData.calorieCount, "Calories")
                console.log(Information.keyData.proteinCount, "Protéines")
                console.log(Information.keyData.carbohydrateCount, "Glucides")
                console.log(Information.keyData.lipidCount, "Lipides")

                //remplissage des données
                this.setState(() => ({
                    firstName: Information.userInfos.firstName,
                    calorieCount: ((Information.keyData.calorieCount)/1000)+"KCal",
                    proteinCount: (Information.keyData.proteinCount)+"g",
                    carbohydrateCount: (Information.keyData.carbohydrateCount)+"g",
                    lipidCount: (Information.keyData.lipidCount)+"g"
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
                        <RadarPerformance/>
                        <KPI/>
                    </div>
                </div>

                <div>
                    <Tag iconTag={logo_Calories} valueOfTag={this.state.calorieCount} textOfTag={"Calories"} />
                    <Tag iconTag={logo_Proteines} valueOfTag={this.state.proteinCount} textOfTag={"Protéines"} />
                    <Tag iconTag={logo_Glucides} valueOfTag={this.state.proteinCount} textOfTag={"Glucides"} />
                    <Tag iconTag={logo_Lipides} valueOfTag={this.state.lipidCount} textOfTag={"Lipides"} />
                </div>

            </div>
        )
    }
}

export default HomePage