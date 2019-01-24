import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { graphql, Link } from 'gatsby'
import MemberCard from '../components/MemberCard'
import Homepagelogo from '../components/homepagelogo'

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    padding: '20px'
  }
}

class Team extends Component {
  getTeamMembers = (data) => {
    return(
      <Grid item xs={12} md={4} lg={4} key={data.name}>
        <MemberCard name={data.name} description={data.description} image={data.image} position={data.position}/>
      </Grid>
    )
  }

  render() {
    const { classes } = this.props
    const {data} = this.props
    return (
      <div className={`container ${classes.root}`}>
        <div className={`row ${classes.header}`}>
          <div className={'col-8 offset-2'}>
            <Link to={'/'}>
              <Homepagelogo/>
            </Link>
          </div>
        </div>
        <Grid container spacing={24}>
          {data.site.siteMetadata.members.map(this.getTeamMembers)}
        </Grid>
      </div>
    )
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const query = graphql`
  query Members {
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
export default withStyles(styles)(Team)
