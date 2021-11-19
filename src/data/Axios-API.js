import axios from 'axios'

const AdressLink = "http://localhost:3001/user/"

//constante pour definir le profil utilisateur
const UserIdentification = 12;

//Call pour le prenom + 4 tags
function dataUser () {
    return axios.get(AdressLink + UserIdentification)
}
//call pour le graphique activité
function graphActivity () {
    return axios.get(AdressLink + UserIdentification +"/activity")
}

//call pour le graphique activité
function graphTimingSession () {
    return axios.get(AdressLink + UserIdentification +"/average-sessions")
}

//call pour le graphique Radar
function graphRadar() {
    return axios.get(AdressLink + UserIdentification +"/performance")
}

//call pour le graphique KPI Score
function graphKPI () {
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
