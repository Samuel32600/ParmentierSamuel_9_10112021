import React from 'react'
import axios from 'axios'
import { ResponsiveContainer, PieChart, Pie, } from 'recharts';


import '../styles/kpi.css'

class KPI extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {
            resultscore: []
        }
    }
    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        axios.get(AdressLink + UserIdentification)

            .then((request) => {
                const DataKPI = request.data.data
                // console.log(request.data.data.score)
                // console.log(request.data.data.todayScore)

                this.setState(() => ({
                    resultscore: DataKPI
                }))
            })
    }

    render() {

        const FullCircle = [
            { value: 100, fill: "#FFFFFF" },
        ];

        //link pour l'Id 18
        let linkScore = this.state.resultscore.score
        //link pour l'Id 12
        const LinkTodayScore = this.state.resultscore.todayScore
         
        //condition pour changer le link en fonction de l'id utilisateur
        if(linkScore === undefined){
            linkScore = LinkTodayScore
        }

        const smallCircle = [   
            //valeur du score
            { value: (linkScore * 100), fill: "#FF0000" },
            //valeur restante pour arriver à 100%
            { value: 100 - (linkScore * 100), fill: 'transparent' },
        ];

        // const linkScore =  this.state.resultscore.todayScore
        // console.log(linkScore)
        // const smallCircle = [
        //     //valeur restante pour arriver à 100%
        //     {  value: 100-(linkScore*100), fill: "#FBFBFB" },
        //     //valeur du score
        //     {  value: (linkScore*100), fill: "#FF0000" },
        // ];

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