import React, { useEffect, useState } from 'react'
import FirstSection from '../components/single article/FirstSection'
import SecondSection from '../components/single article/SecondSection'
import ThirdSection from '../components/single article/ThirdSection'
import Category from '../layouts/Category'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function SingleArticle() {
  const location = useLocation()
  useEffect(() => {
    if (window.scrollY) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }

  })
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Category>
          <FirstSection article={location.state.article} />
          <SecondSection article={location.state.article} />
          <ThirdSection recommendedArticles={location.state.recommendedArticles} detailPath={location.state.detailPath} />
        </Category>
      </motion.div>
    </>
  )
}

export default SingleArticle