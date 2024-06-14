import React from 'react'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import img from "../assets/images/img1.jfif"
import Footer from '../components/Footer'

function Home() {
    const SPORT = {
        category: 'sport',
        articles: [
            {
                title: 'comment avoir des abdos en 2 semaines ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment avoir des abdos en 2 semaines ?',
                description: 'pour avoir des abdos en 2 semaines pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment avoir des abdos en 2 semaines ?',
                description: 'pour avoir des abdos en 2 pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            }
        ]
    }
    const RELATION_HOMME_FEMME = {
        category: 'relation homme-femme',
        articles: [
            {
                title: 'comment avoir plus de femme ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment se marier avant 25 ans ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment ne plus etre niceguy ?',
                description: ' pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            }
        ]
    }
    const MOTIVATION = {
        category: 'motivation',
        articles: [
            {
                title: 'comment realiser ses objectifs ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment avoir plus argent en 2024 ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            },{
                title: 'comment etre plus productif que hier ?',
                description: 'pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulement pour avoir des abdos en 2 semaines il faut non seulementpour avoir des abdos en 2 semaines il faut non seulement etre regulier et avoir des regles intransigeant',
                miniature: img,
                image: '',
                createDate: '10-20-2021'
            }
        ]
    }
    const themes = [SPORT, RELATION_HOMME_FEMME, MOTIVATION]
    return (
        <>
            <Navbar />
            <FirstSection title="my fisrt section de home page" description="une description pour cette page vraiment fun et instrusantes une description pour cette page vraiment"/>
            <SecondSection themes={themes} />
            <Footer />
        </>
    )
}

export default Home