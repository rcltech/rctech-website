import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../components/seo'

import Header from '../components/Header'
import Grid from '@material-ui/core/Grid'
import MemberCard from '../components/MemberCard'

const getTeamMembers = (data) => {
  return(
    <Grid item xs={12} sm={6} md={4} lg={4} key={data.name}>
      <MemberCard name={data.name} description={data.description} image={data.image} position={data.position}/>
    </Grid>
  )
}

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
            <Grid container spacing={24}>
              {data.site.siteMetadata.members.map(member => getTeamMembers(member))}
            </Grid>
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
        members {
          name
          position
          description
          image
        }
      }
    }
  }
`

export default IndexPage
