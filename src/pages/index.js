import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'
import MemberGrid from '../components/MemberGrid'

const IndexPage = props => (
  <div>
    <StaticQuery
      query={keywordsQuery}
      render={data => {
        return (
          <div className={'container'}>
            <SEO
              title={data.site.siteMetadata.title}
              keywords={data.site.siteMetadata.keywords}
            />
            <Header />
            <MemberGrid />
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
      }
    }
  }
`

export default IndexPage
