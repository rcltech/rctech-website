import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Grid, Typography, withStyles } from '@material-ui/core'
import MemberCard from './MemberCard'
import { text } from '../colorscheme'

const styles = {
  container: {
    display: "grid",
    margin: '5vh auto 2vh auto',
  },
  gridHeading: {
    textAlign: 'center',
    fontFamily: 'inherit',
    fontWeight: 900,
    fontSize: '1.5em',
    color: text,
  },
  headline: {
    margin: "40px 0"
  }
}

const getTeamMembers = (data) => {
  return(
    <Grid item xs={12} sm={6} md={4} lg={4} key={data.name}>
      <MemberCard name={data.name} description={data.description} image={data.image} position={data.position}/>
    </Grid>
  )
}

const MemberGrid = props => {
  const { classes } = props
  return (
    <>
      <StaticQuery
        query={membersQuery}
        render={data => {
          return (
            <>
              <Typography
                className={`${classes.gridHeading}`}
                gutterBottom
                variant="h2"
                component="h2"
                style={styles.headline}
              >
                Our Team
              </Typography>
              <Grid container spacing={10}>
                {data.site.siteMetadata.members.map(member => getTeamMembers(member))}
              </Grid>
            </>
          )
        }}
      />
    </>
  )
}

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

export default withStyles(styles)(MemberGrid)
