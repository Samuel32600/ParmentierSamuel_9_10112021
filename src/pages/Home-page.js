import React from 'react'
import axios from 'axios'
import '../styles/home-page.css'




class HomePage extends React.Component {

    
    componentDidMount() {
        axios.get("http://localhost:3001/user/18")
        .then(function (request) {

        
            console.log(request.data.data.userInfos.firstName);
          })

    }


    render() {
        return (
            <div>
                <h1 className='title'>Bonjour </h1>

            </div>
        )
    }
}

export default HomePage