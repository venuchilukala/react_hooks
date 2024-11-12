import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { AppContext } from '../contexts/AppContext'

const Profile = () => {
    const {name, phone ,email} = useContext(AppContext)
    return (
        <div>
            <Header />
            <h1>Profile Component</h1>
            <h2>user : {name}</h2>
            <h3>Phone : {phone}</h3>
            <h4>Email : {email}</h4>
            <Footer />
        </div>
    )
}

export default Profile
