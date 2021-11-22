import axios from 'axios'

/**
* generic address for the call API
*/
const AdressLink = "http://localhost:3001/user/"

/**
* const to define the user Profil
*/
const UserIdentification = 8000;

/**
* function for call the firstName + data in for 4 tags
*/
function dataUser() {
    return axios.get(AdressLink + UserIdentification)
}

/**
* function for call the data on activity graph
*/
function graphActivity() {
    return axios.get(AdressLink + UserIdentification + "/activity")
}

/**
* function for call the data on timing session graph
*/
function graphTimingSession() {
    return axios.get(AdressLink + UserIdentification + "/average-sessions")
}

/**
* function for call the data on Radar graph
*/
function graphRadar() {
    return axios.get(AdressLink + UserIdentification + "/performance")
}

/**
* function for call the data on Score graph
*/
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
