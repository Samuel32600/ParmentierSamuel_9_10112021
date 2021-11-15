import React from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../styles/activity.css'



class Activity extends React.Component {

    constructor(props) {
        super(props)
        //initialisation des données
        this.state = {
            elementOfSessions: []
        }
    }


    componentDidMount() {
        const AdressLink = "http://localhost:3001/user/"
        const UserIdentification = 18;
        const Type = "/activity"
        axios.get(AdressLink + UserIdentification + Type)

            .then((request) => {
                const DataActivity = request.data.data
                // console.log(request.data.data.sessions)

                //remplissage des données
                this.setState(() => ({
                    elementOfSessions: DataActivity.sessions,
                }))
            })
    }

    render() {

        // definition info bulle poids + calories
        const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="custom-tooltip">               
                  <p className="label1">{`${payload[0].value}`}Kg</p>
                  <p className="label2">{`${payload[1].value}`}Kcal</p>
                </div>
              );
            }          
            return null;
          };
        
        

        return (
            <div className='container-activity'>
                <p className='title-graph-activity'>
                    Activité quotidienne
                </p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width="100%"
                        height="80%"
                        data={this.state.elementOfSessions}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="day"
                            tickMargin={5}
                        />

                        <YAxis
                            dataKey="calories"
                            orientation="right"
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={5}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                        />                        

                        <Legend
                            layout="horizontal"
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                        />

                        <Bar
                             dataKey="kilogram"
                             barSize={7}
                             radius={[3, 3, 0, 0]}
                             fill="#282D30"
                        />

                        <Bar dataKey="calories" barSize={7} radius={[3, 3, 0, 0]} fill="#E60000" />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Activity