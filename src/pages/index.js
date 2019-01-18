import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <StaticQuery 
      query={keywordsQuery}
      render={data => (
        <SEO title="Home" keywords={data.site.siteMetadata.keywords} />
      )}
    />
    
  </Layout>
)


const keywordsQuery = graphql`
  query keywords{
    site{
      siteMetadata{
        keywords
      }
    }
  }
`

export default IndexPage
