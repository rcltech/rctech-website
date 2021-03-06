import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import { text } from '../colorscheme'

const styles = {
  card: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    maxWidth: 'calc(240px + 8vmax)',
    margin: 'auto',
    elevation: 0,
  },
  media: {
    objectFit: 'cover',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'inherit',
    fontWeight: 900,
    color: text,
  },
  nameTag: {
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
  positionTag: {
    fontSize: '1em',
  },
  descriptionText: {
    fontSize: '0.8em',
  },
  profileImage: {
    borderRadius: '50%',
    margin: '20px',
  },
}

const MemberCard = props => {
  const { classes } = props
  return (
    <div className={classes.card}>
      <CardMedia>
        <StaticQuery
          query={graphql`
            query {
              images: allFile {
                edges {
                  node {
                    relativePath
                    name
                    childImageSharp {
                      sizes(maxWidth: 600) {
                        ...GatsbyImageSharpSizes
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const image = data.images.edges.find(n => {
              return n.node.relativePath.includes(props.image)
            })
            if (!image) {
              return null
            }

            const imageSizes = image.node.childImageSharp.sizes
            return (
              <Img
                alt={props.alt}
                sizes={imageSizes}
                className={classes.profileImage}
              />
            )
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          className={`${classes.text} ${classes.nameTag}`}
          gutterBottom
          variant="h2"
          component="h2"
        >
          {props.name}
        </Typography>
        <Typography
          className={`${classes.text} ${classes.positionTag}`}
          gutterBottom
          variant="h3"
          component="h3"
        >
          {props.position}
        </Typography>
        <Typography className={`${classes.text} ${classes.descriptionText}`} component="p">
          {props.description}
        </Typography>
      </CardContent>
    </div>
  )
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default withStyles(styles)(MemberCard)
