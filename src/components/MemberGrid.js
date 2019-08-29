import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import MemberCard from './MemberCard'

const getTeamMembers = (data) => {
  return(
    <Grid item xs={12} sm={6} md={4} lg={4} key={data.name}>
      <MemberCard name={data.name} description={data.description} image={data.image} position={data.position}/>
    </Grid>
  )
}

const MemberGrid = props => (
  <div>
    <StaticQuery
      query={membersQuery}
      render={data => {
        return (
          <div>
            <Grid container spacing={24}>
              {data.site.siteMetadata.members.map(member => getTeamMembers(member))}
            </Grid>
          </div>
        )
      }}
    />
  </div>
)

const membersQuery = graphql`
  query members {
    site {
      siteMetadata {
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

export default MemberGrid
