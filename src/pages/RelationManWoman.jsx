import Category from "../layouts/Category"
import FirstSection from "../components/category pages/FirstSection"
import SecondSection from "../components/category pages/SecondSection"
import articlesRelationManWoman from "../data/RelationManWoman"
import { useEffect } from "react"

function RelationManWoman() {
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
            <FirstSection category="relation homme femme" description="Cultiver une relation épanouie et durable passe par une communication ouverte, une compréhension mutuelle et une capacité à s'adapter aux défis de la vie. Découvrez des conseils et des réflexions pour construire une relation solide basée sur la confiance, le respect et l'amour." />
            <SecondSection articles={articlesRelationManWoman} detailPath="/relation-homme-femme/"  />
        </Category>
    )
}

export default RelationManWoman