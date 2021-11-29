import axios from 'axios'

//const to define the user Profil
const UserIdentification = 18;


// generic address for the call API
const AdressLink = "http://localhost:3001/user/"


//function for call the firstName + data in for 4 tags
//http://localhost:3001/user/${userId}
function dataUser() {
    return axios.get(AdressLink + UserIdentification)
}


//function for call the data on activity graph
//http://localhost:3001/user/${userId}/activity

function graphActivity() {
    return axios.get(AdressLink + UserIdentification + "/activity")
}


//function for call the data on timing session graph
//http://localhost:3001/user/${userId}/average-sessions

function graphTimingSession() {
    return axios.get(AdressLink + UserIdentification + "/average-sessions")
}


//function for call the data on Radar graph
//http://localhost:3001/user/${userId}/performance

function graphRadar() {
    return axios.get(AdressLink + UserIdentification + "/performance")
}


//function for call the data on Score graph
//http://localhost:3001/user/${userId}
function graphKPI() {
    return axios.get(AdressLink + UserIdentification)
}

const CallAPI = {
    dataUser,
    graphActivity,
    graphTimingSession,
    graphRadar,
    graphKPI,

}

export default CallAPI;
