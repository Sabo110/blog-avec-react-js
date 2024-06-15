
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NavbarTest from '../components/NavbarTest'
import articlesSport from '../data/SportData'
import articlesMotivation from '../data/MotivationData'
import articlesRelationManWoman from '../data/RelationManWoman'
import ArticleBlock from '../components/ArticleBlock'
import { NavLink } from 'react-router-dom'



function Home() {
    const LAS = articlesSport.slice(-3) // on recupere les trois dernier articles de sport
    const LAM = articlesMotivation.slice(-3) //... de motivation
    const LARHF = articlesRelationManWoman.slice(-3) //... de relation homme femme
    return (
        <>
            <NavbarTest />
            <FirstSection title="Sport, motivation, amour : Trouvez l'équilibre parfait pour une vie épanouie" description="Découvrez comment l'activité physique, la motivation personnelle et une relation saine contribuent à un bien-être durable." />
            <section className="bg-[#F2F4F7] py-8 flex flex-col gap-10">

                <div className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                    <div className="flex justify-between gap-2"><h1 className="font-bold text-xl"> Sport </h1><NavLink to="/sport" className="bg-white rounded p-2 font-bold text-sm">Voir tout</NavLink></div>
                    <div className="flex flex-col gap-5 mt-4">
                        {LAS.map((article, index) => (
                            <ArticleBlock key={index} article={article} detailPath="/sport/" recommendedArticles={articlesSport} />
                        ))}
                    </div>
                </div>

                <div className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                    <div className="flex justify-between gap-2"><h1 className="font-bold text-xl"> Motivation </h1><NavLink to="/motivation" className="bg-white rounded p-2 font-bold text-sm">Voir tout</NavLink></div>
                    <div className="flex flex-col gap-5 mt-4">
                        {LAM.map((article, index) => (
                            <ArticleBlock key={index} article={article} detailPath="/motivation/" recommendedArticles={articlesMotivation} />
                        ))}
                    </div>
                </div>

                <div className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                    <div className="flex justify-between gap-2" ><h1 className="font-bold text-xl"> Homme-Femme </h1><NavLink to="/relation-homme-femme" className="bg-white rounded p-2 font-bold text-sm">Voir tout</NavLink></div>
                    <div className="flex flex-col gap-5 mt-4">
                        {LARHF.map((article, index) => (
                            <ArticleBlock key={index} article={article} detailPath="/relation-homme-femme/" recommendedArticles={articlesRelationManWoman} />
                        ))}
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Home