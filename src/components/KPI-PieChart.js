import React from 'react'
import CallAPI from '../data/Axios-API.js'

import { ResponsiveContainer, PieChart, Pie, } from 'recharts';

import '../styles/kpi.css'

class KPI extends React.Component {

    constructor(props) {
        super(props)
        //data init for PieChart
        this.state = {
            resultscore: []
        }
    }
    componentDidMount() {
        CallAPI.graphKPI()

            .then((request) => {
                const DataKPI = request.data.data
                // console.log(request.data.data.score)
                // console.log(request.data.data.todayScore)

                //data definition for PieChart
                this.setState(() => ({
                    resultscore: DataKPI
                }))
            })
    }

    render() {

        const FullCircle = [
            { value: 100, fill: "#FFFFFF" },
        ];

        // Link for the different user's
        // link for Id 18 = LinkScore
        // Link for Id 12 = LinkTodayScore        
        let linkScore = this.state.resultscore.score
        const LinkTodayScore = this.state.resultscore.todayScore
         
        //condition to change the link in function of the user ID
        if(linkScore === undefined){
            linkScore = LinkTodayScore
        }

        const smallCircle = [  
            //score value of user
            { value: (linkScore * 100), fill: "#FF0000" },
            
            //remainning value to reach 100%          
            { value: 100 - (linkScore * 100), fill: 'transparent' },
        ];

        return (
            <div className='container-kpi'>
                <p className='title-kpi'>Score</p>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart >

                        <Pie data={FullCircle}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            strokeWidth={0} />

                        <Pie
                            data={smallCircle}
                            dataKey="value"
                            name="A1"
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={90}
                            cornerRadius={10}
                            strokeWidth={0}
                            startAngle={90}
                            endAngle={450} />

                    </PieChart>
                </ResponsiveContainer>

                <p className='text-kpi'>
                    <span>{linkScore * 100}% </span>
                    de votre objectif
                </p>
            </div>
        )
    }
}

export default KPI