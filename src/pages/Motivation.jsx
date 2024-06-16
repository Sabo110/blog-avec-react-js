import Category from "../layouts/Category"
import FirstSection from "../components/category pages/FirstSection"
import SecondSection from "../components/category pages/SecondSection"
import articlesMotivation from "../data/MotivationData"
import { useEffect } from "react"

function Motivation() {
    useEffect(() => {
        if(window.scrollY) {
            scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [])
    return (
        <Category>
            <FirstSection category="Motivation" description="Atteindre vos objectifs, que ce soit sur le plan personnel ou professionnel, demande de la motivation et de la persévérance. Découvrez des stratégies pour rester motivé, identifier vos forces et surmonter les obstacles qui se présentent sur votre chemin." />
            <SecondSection articles={articlesMotivation} detailPath="/motivation/" />
        </Category>

    )
}

export default Motivation