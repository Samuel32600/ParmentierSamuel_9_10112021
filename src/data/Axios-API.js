import axios from 'axios'


const AdressLink = "http://localhost:3001/user/"

const UserIdentification = 18;


//Call pour le prenom + graph BarChart + 4 tags
const dataUser = () =>{
    return  axios.get(AdressLink + UserIdentification + "/activity")
}

// //Call pour le graph LineChart
// axios.get(AdressLink + UserIdentification + "/average-sessions")

// //Call pour le graph RadarChart
// axios.get(AdressLink + UserIdentification + "/performance")

// //Call pour le graph RadarChart
// axios.get(AdressLink + UserIdentification)

export default{
    dataUser
}