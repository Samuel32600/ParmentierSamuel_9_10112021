import React from 'react'
import CallAPI from '../data/Axios-API.js'

import '../styles/home-page.css'

// import of components
import Activity from '../components/Activity-BarChart.js'
import TimingSession from '../components/TimingSession-LineChart.js'
import RadarPerformance from '../components/Radar-RadarChart.js'
import KPI from '../components/KPI-PieChart.js'
import Tag from '../components/Tag.js'


//import of icons Tags
import logo_Calories from '../assets/Calories.png'
import logo_Proteines from '../assets/Proteines.png'
import logo_Glucides from '../assets/Glucides.png'
import logo_Lipides from '../assets/Lipides.png'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        //data init
        this.state = {
            firstName: '',
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
            error: false
        }
    }

    componentDidMount() {
        CallAPI.dataUser()

            .then((request) => {
                const Information = request.data.data;
                // console.log(Information.userInfos.firstName)
                // console.log(Information.keyData.calorieCount, "Calories")
                // console.log(Information.keyData.proteinCount, "Protéines")
                // console.log(Information.keyData.carbohydrateCount, "Glucides")
                // console.log(Information.keyData.lipidCount, "Lipides")

                //data definition for HomePage
                this.setState(() => ({
                    firstName: Information.userInfos.firstName,
                    calorieCount: ((Information.keyData.calorieCount) / 1000),
                    proteinCount: (Information.keyData.proteinCount),
                    carbohydrateCount: (Information.keyData.carbohydrateCount),
                    lipidCount: (Information.keyData.lipidCount)
                }))
                    
            })

            .catch(() => {                
                this.setState({
                    error: true
                })
            })
    }


    render() {
        return (
            this.state.error ? (
                <div className="error">Error, user ID not defined</div>                
            ) : 
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


