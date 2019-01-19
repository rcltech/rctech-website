import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'


const styles = {
  fullImage: {
    width: '1000px',
    maxWidth: '70%',
    maxHeight: "70%",
    margin: "0 auto",
  }
}
const Homepagelogo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      `}
      render={data => (
        <div className={'d-flex align-items-center justify-content-center'} style={{ height: '80%'}}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={styles.fullImage}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>

      )}
    />
  )
}

export default Homepagelogo
