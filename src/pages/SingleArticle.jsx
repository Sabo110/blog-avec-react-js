import React, { useEffect, useState } from 'react'
import FirstSection from '../components/single article/FirstSection'
import SecondSection from '../components/single article/SecondSection'
import ThirdSection from '../components/single article/ThirdSection'
import Category from '../layouts/Category'
import { useLocation } from 'react-router-dom'



function SingleArticle() {
  const location = useLocation()

  return (
    <>
      <Category>
        <FirstSection article={location.state.article} />
        <SecondSection article={location.state.article} />
        <ThirdSection recommendedArticles={location.state.recommendedArticles} detailPath={location.state.detailPath} />
      </Category>
    </>
  )
}

export default SingleArticle