import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FirstSection from '../components/FirstSection'

function SingleArticleLayout() {
  return (
    <>
        <Navbar />
        <FirstSection />
        <ArticlePresentation />
        <RecommendedArticles />
        <Footer />
    </>
  )
}

function ArticlePresentation() {
    return(
        <>
            <h1>presentation de l'article</h1>
        </>
    )
}

function RecommendedArticles() {
    return(
        <>
            <h1>articles recommendés</h1>
        </>
    )
}
export default SingleArticleLayout