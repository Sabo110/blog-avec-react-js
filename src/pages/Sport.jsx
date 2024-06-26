import FirstSection from "../components/category pages/FirstSection"
import SecondSection from "../components/category pages/SecondSection"
import Category from "../layouts/Category"
import articlesSport from "../data/SportData"
import { useEffect } from "react"
import { motion } from "framer-motion"

function Sport() {
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
            <FirstSection category="Sport" description="L'activité physique est la clé d'un corps sain et d'un esprit vif. Explorez des conseils pratiques pour débuter ou progresser dans votre sport, trouvez des sources d'inspiration et découvrez des techniques pour atteindre vos objectifs sportifs." />
            <SecondSection articles={articlesSport} detailPath="/sport/" />
        </Category>
        </motion.div>
    )
}

export default Sport