import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import SEO from '../components/seo'
import Homepagelogo from '../components/homepagelogo'
import Header from '../components/Header'

const IndexPage = () => (
  <div className={'container'} style={{height: '100vh'}}>
    <StaticQuery 
      query={keywordsQuery}
      render={data => (
        <SEO title={data.site.siteMetadata.title} keywords={data.site.siteMetadata.keywords} />
      )}
    />
    <Header/>
    <Homepagelogo/>
  </div>
)


const keywordsQuery = graphql`
  query keywords {
    site{
      siteMetadata{
        title
        keywords
      }
    }
  }
`

export default IndexPage
