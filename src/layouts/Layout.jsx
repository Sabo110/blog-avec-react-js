import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'

function Layout(props) {
    const {themes, title, description} = props
    return (
        <>
            <Navbar />
            <FirstSection title={title} description={description} />
            <SecondSection themes={themes} />
            <Footer />
        </>
    )
}

export default Layout