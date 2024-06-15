import FirstSection from "../components/category pages/FirstSection"
import SecondSection from "../components/category pages/SecondSection"
import Category from "../layouts/Category"
import articlesSport from "../data/SportData"

function Sport() {
    return (
        <Category>
            <FirstSection category="Sport" description="L'activité physique est la clé d'un corps sain et d'un esprit vif. Explorez des conseils pratiques pour débuter ou progresser dans votre sport, trouvez des sources d'inspiration et découvrez des techniques pour atteindre vos objectifs sportifs." />
            <SecondSection articles={articlesSport} detailPath="/sport/" />
        </Category>
    )
}

export default Sport