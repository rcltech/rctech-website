import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'


const styles = {
  fullImage: {
    width: '100%',
    margin: "0 auto",
  }
}
const Logo = () => {
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
        <div className={'d-flex align-items-center justify-content-center'}>
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

export default Logo
