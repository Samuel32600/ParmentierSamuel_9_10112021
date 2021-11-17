import React from 'react'
import axios from 'axios'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '../styles/radar.css'

class RadarPerformance extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {
            elementOfKind: [],
            valueOfKind: {}
        }
    }
    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        const Type = "/performance"
        axios.get(AdressLink + UserIdentification + Type)
            .then((request) => {
                const DataKind = request.data.data
                // console.log(request.data.data.kind)
                // console.log(request.data.data.data)

                //remplissage des données
                this.setState(() => ({
                    elementOfKind: DataKind.Kind,
                    valueOfKind: DataKind.data
                }))
            })
    }

    render() {

        // constante pour convertir les chiffres en type pour le radar
        const categoryKind = {
            1: "Cardio",
            2: "Energie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
        }

        // modification du formalisme des valeurs du radar
        const updateKind = (tickItem) => {
            return categoryKind[tickItem]
        }

        return (
            <div className='container-radar'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        outerRadius="60%"
                        cx="49%"
                        cy="50%"
                        data={this.state.valueOfKind} >

                        <PolarGrid />

                        <PolarAngleAxis
                            dataKey="kind"
                            stroke="#FFFFFF"
                            tickLine={false}
                            fontSize={12}
                            tickFormatter={updateKind} />

                        <PolarRadiusAxis
                            axisLine={false}
                            domain={[0, 250]}
                            tickCount={6}
                            tick={false} />

                        <Radar
                            dataKey="value"
                            stroke="#FF0101"
                            fill="#FF0101"
                            fillOpacity={0.7} />

                    </RadarChart>

                </ResponsiveContainer>
            </div>
        )
    }
}

export default RadarPerformance