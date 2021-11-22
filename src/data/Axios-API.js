import axios from 'axios'

/**
* generic address for the call API
*/
const AdressLink = "http://localhost:3001/user/"

/**
* const to define the user Profil
* @param {number} value by default: 12 or 18
*/
const UserIdentification = 12;

/**
* function for call the firstName + data in for 4 tags
* return {promise} adress with firstname + quantity of 4 tags
*/
function dataUser() {
    return axios.get(AdressLink + UserIdentification)
}

/**
* function for call the data on activity graph
* return {promise} adress with value Kg and KCal for one week
*/
function graphActivity() {
    return axios.get(AdressLink + UserIdentification + "/activity")
}

/**
* function for call the data on timing session graph
* return {promise} adress with timming session for every day of the week
*/
function graphTimingSession() {
    return axios.get(AdressLink + UserIdentification + "/average-sessions")
}

/**
* function for call the data on Radar graph
* return {promise} adress with type of performance
*/
function graphRadar() {
    return axios.get(AdressLink + UserIdentification + "/performance")
}

/**
* function for call the data on Score graph
* return {promise} adress with score value
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
