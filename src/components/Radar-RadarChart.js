import React from 'react'
import CallAPI from '../data/Axios-API.js'

import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '../styles/radar.css'

/**
 * define class RadarPerformance
 * @component
 * 
 * @return {component}
 */
class RadarPerformance extends React.Component {

    constructor(props) {
        super(props)
        //data init for RadarChart
        this.state = {
            elementOfKind: [],
            valueOfKind: {}
        }
    }
    componentDidMount() {
        CallAPI.graphRadar()

            .then((request) => {
                const DataKind = request.data.data
                // console.log(request.data.data.kind)
                // console.log(request.data.data.data)

                //data definition for RadarChart
                this.setState(() => ({
                    elementOfKind: DataKind.Kind,
                    valueOfKind: DataKind.data
                }))
            })
    }

    /**
     * modify  number value of Kind in  a string Category
     * @method
     * @param {object.<number>} {tickItem} value by default: number
     * @return {string} new value: string
     * @example
     * let result = tickItem (1)
     * console.log(result) // display "Cardio"
     */
    updateKind = (tickItem) => {

        // const for convert number in Category
        const categoryKind = {
            1: "Cardio",
            2: "Energie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
        }

        return categoryKind[tickItem]
    }

    render() {

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
                            tickFormatter={this.updateKind} />

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