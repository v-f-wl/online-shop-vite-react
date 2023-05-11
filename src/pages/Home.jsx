// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../components/Container'
import HeaderTop from '../components/header/HeaderTop'
import HeaderMain from '../components/header/HeaderMain'
import HeaderCatalog from '../components/header/HeaderCatalog'
import MainCard from '../components/MainCard'
import MainSection from '../components/MainSection'
import BlogCention from '../components/BlogCention'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Container>
          <HeaderTop/>
          <hr />
          <HeaderMain/>
        </Container>

        <HeaderCatalog/>

        <Container>
          <MainCard
            baner
            title='Category menu'
            button='categories'
          />
          <MainCard
            list
            title='Best selling products'
            button='products'
          />
          <MainCard
            list
            title='Best from Farmers'
            button='products'
          />
          <MainSection
            title='Section Headline'
          />
          <BlogCention
            title='Read our Blog posts'
          />
          <Footer/>
        </Container>
      </div>
  )
}

export default Home