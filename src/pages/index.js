import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../components/seo'

import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

const IndexPage = props => (
  <div>
    <StaticQuery
      query={keywordsQuery}
      render={data => {

        return (
          <div className={'container'} style={{ height: '100vh' }}>
            <SEO
              title={data.site.siteMetadata.title}
              keywords={data.site.siteMetadata.keywords}
            />
            <Header />
            <div className={'row'}>
              <NewsCard
                heading={data.site.siteMetadata.news[0].title}
                date={data.site.siteMetadata.news[0].date}
                body={data.site.siteMetadata.news[0].body}
                image={data.site.siteMetadata.news[0].image}
              />
            </div>
          </div>
        )
      }}
    />
  </div>
)

const keywordsQuery = graphql`
  query keywords {
    site {
      siteMetadata {
        title
        keywords
        news {
          title
          date
          body
          image
        }
      }
    }
  }
`

export default IndexPage
