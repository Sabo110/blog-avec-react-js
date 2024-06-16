import Category from "../layouts/Category"
import FirstSection from "../components/category pages/FirstSection"
import SecondSection from "../components/category pages/SecondSection"
import articlesRelationManWoman from "../data/RelationManWoman"
import { useEffect } from "react"
import { motion } from "framer-motion"

function RelationManWoman() {
    useEffect(() => {
        if(window.scrollY) {
            scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
    }, [])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Category>
            <FirstSection category="relation homme femme" description="Cultiver une relation épanouie et durable passe par une communication ouverte, une compréhension mutuelle et une capacité à s'adapter aux défis de la vie. Découvrez des conseils et des réflexions pour construire une relation solide basée sur la confiance, le respect et l'amour." />
            <SecondSection articles={articlesRelationManWoman} detailPath="/relation-homme-femme/"  />
        </Category>
        </motion.div>
    )
}

export default RelationManWoman