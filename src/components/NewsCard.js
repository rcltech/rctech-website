import React from 'react'
import PropTypes from 'prop-types'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { text } from '../colorscheme'
import { graphql, StaticQuery } from 'gatsby'
import Card from '@material-ui/core/Card'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const styles = {
  card: {
    width: '100%',
    backgroundColor: text,
  },
  media: {
    objectFit: 'cover',
  },
  text: {
    textAlign: 'left',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 900,
    color: 'black',
  },
  nameTag: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  positionTag: {
    fontSize: '18px',
  },
}

const NewsCard = props => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <div className={'row d-flex align-items-center'}>
        <div className={'col-4 p-4'}>
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
                return <Img alt={props.alt} sizes={imageSizes} />
              }}
            />
          </CardMedia>
        </div>
        <div className={'p-2 col-8'}>
          <CardContent>
            <Typography
              className={`${classes.text} ${classes.nameTag}`}
              gutterBottom
              variant="h2"
              component="h2"
            >
              {props.heading}
            </Typography>
            <Typography
              className={`${classes.text} ${classes.positionTag}`}
              gutterBottom
              variant="h3"
              component="h3"
            >
              {props.date}
            </Typography>
            <Typography className={classes.text} component="p">
              {props.body}
            </Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default withStyles(styles)(NewsCard)
