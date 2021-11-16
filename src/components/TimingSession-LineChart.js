import React from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import '../styles/timingSession.css'

class TimingSession extends React.Component {

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
        const Type = "/average-sessions"
        axios.get(AdressLink + UserIdentification + Type)

            .then((request) => {
                const DataTimingSession = request.data.data
                // console.log(request.data.data.sessions)

                //remplissage des données
                this.setState(() => ({
                    elementOfSessions: DataTimingSession.sessions,
                }))
            })
    }

    render() {

        // constante pour convertir les chiffres en jour
        const day = {
            1: "L",
            2: "M",
            3: "M",
            4: "J",
            5: "V",
            6: "S",
            7: "D",
        }

        // modification du formalisme de l'axe des abscisses
        const updateDay = (tickItem) => {
            return day[tickItem]
        }

        // definition info bulle poids + calories
        const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="custom-tooltip-LineChart">
                        <p>{`${payload[0].value}`} min</p>

                    </div>
                );
            }
            return null;
        };


        return (
            <div className='container-timingSession'>

                <p className='title-graph-timingSession'>
                    Durée moyenne des sessions
                </p>

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart width="100%"
                        height="100%"
                        data={this.state.elementOfSessions}
                        margin={{ top: 0, right: 10, left: -50, bottom: 0 }} >

                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            stroke="#FFFFFF"
                            tickFormatter={updateDay} />

                        <YAxis 
                            type={'number'}
                            domain={['dataMin -10', 'dataMax + 20']}
                            axisLine={false}
                            tick={false}                            
                            dataKey="sessionLength" />

                        <Tooltip
                            content={<CustomTooltip />} />


                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="#fff"
                            dot={false} />

                    </LineChart>
                </ResponsiveContainer>

            </div>
        )
    }
}

export default TimingSession