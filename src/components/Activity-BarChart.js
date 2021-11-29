import React from 'react'
import CallAPI from '../data/Axios-API';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../styles/activity.css'

/**
 * define class Activity
 * @component
 * 
 * @return {component}
 */
class Activity extends React.Component {

    constructor(props) {
        super(props)
        //data init for BarChart
        this.state = {
            elementOfSessions: []
        }
    }

    componentDidMount() {
        CallAPI.graphActivity()

            .then((request) => {
                const DataActivity = request.data.data
                // console.log(request.data.data.sessions)

                //data definition for BarChart
                this.setState(() => ({
                    elementOfSessions: DataActivity.sessions,
                }))
            })
    }

    /**
     * modify unit value on X Axis on Barchart
     * @method
     * @param {object.<string>} {tickItem} value by default: string
     * 
     * @return {number} new value: number
     * @example
     * let result = formatXAxis("2020-07-01")
     * console.log(result) // display 1
     */
    formatXAxis = (tickItem) => {
        if (typeof tickItem === 'string') {
            // console.log(tickItem)
            return tickItem.substring(tickItem.length - 1, tickItem.length)
        }
    }

    /**
     * modify  unit format of Tooltip on BarChart
     * @method
     * @param {object} {payload.value} value by default: xx Kilogram + xx calories
     * 
     * @return {string} new value: xxKg + xxKCal
     * @example
     * let result = Tooltip("Kilogram":80, "calories":240)
     * console.log(result) // display "80Kg" + "240KCal"
     */
    CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-BarChart">
                    <p className="label1">{`${payload[0].value}`}Kg</p>
                    <p className="label2">{`${payload[1].value}`}Kcal</p>
                </div>
            );
        }
        return null;
    };

    /**
     * modify format of the legend on BarChart
     * @method
     * @param {object} {Legend} value by default: string "Kilogram"
     * 
     * @return {string} new value: string "Poids (Kg)" or "Calories brûlées (KCal)"
     * @example
     * let result = Legend ("Kilogram" or "calories")
     * console.log(result) // display "Poids (Kg)" and "Calories brulées (KCal)"
     */
    updateLegend = (legend) => {
        if (legend === "kilogram") {
            legend = "Poids (kg)"
        }
        else {
            legend = "Calories brûlées (KCal)"
        }
        // legend = legend === "kilogram" ? "Poids (kg)" : "Calories brûlées (KCal)"
        return <span className='text-legend'>{legend}</span>
    }

    render() {

        return (
            <div className='container-activity'>
                <p className='title-graph-activity'>
                    Activité quotidienne
                </p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width="100%"
                        height="100%"
                        data={this.state.elementOfSessions}
                        barGap="8"
                        margin={{
                            top: 0,
                            right: 29,
                            left: 32,
                            bottom: 10
                        }} >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false} />

                        <XAxis
                            dataKey="day"
                            tickMargin={5}
                            tickLine={false}
                            tickFormatter={this.formatXAxis}
                            stroke="#9B9EAC" />

                        <YAxis
                            dataKey="calories"
                            orientation="right"
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={5}
                            stroke="#9B9EAC" />

                        <Tooltip
                            content={this.CustomTooltip} />

                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            formatter={this.updateLegend}
                            wrapperStyle={{ paddingBottom: 40, paddingTop: 20 }} />

                        <Bar
                            dataKey="kilogram"
                            barSize={7}
                            radius={[3, 3, 0, 0]}
                            fill="#282D30" />

                        <Bar
                            dataKey="calories"
                            barSize={7}
                            radius={[3, 3, 0, 0]}
                            fill="#E60000" />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Activity