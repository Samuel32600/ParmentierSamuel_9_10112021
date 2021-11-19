import React from 'react'
import CallAPI from '../data/Axios-API';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../styles/activity.css'

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

    render() {

        /**
         * modify unit value on X Axis on Barchart
         * @param {object.<string>} {tickItem} value by default: year-month-day ex:(2020-07-01)
         * @returns {number} new value: number ex:(1)
         */
        const formatXAxis = (tickItem) => {
            if (typeof tickItem === 'string') {
                // console.log(tickItem)
                return tickItem.substring(tickItem.length - 1, tickItem.length)
            }
        }

        /**
         * modify  unit format of Tooltip on BarChart
         * @param {object} {payload.value} value by default: xx Kilogram + xx calories
         * @returns {string} new value: xxKg + xxKCal
         */
        const CustomTooltip = ({ active, payload }) => {
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
         * @param {object} {Legend} value by default: Kilogram 
         * @returns {string} new value: Poids (Kg) or Calories brûlées (KCal) 
         */
        const updateLegend = (legend) => {
            if (legend === "kilogram") {
                legend = "Poids (kg)"
            }
            else {
                legend = "Calories brûlées (KCal)"
            }
            // legend = legend === "kilogram" ? "Poids (kg)" : "Calories brûlées (KCal)"
            return <span className='text-legend'>{legend}</span>
        }

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
                            tickFormatter={formatXAxis}
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
                            content={<CustomTooltip />} />

                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            formatter={updateLegend}
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