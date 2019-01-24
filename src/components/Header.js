import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'
import { Link } from 'gatsby'

const styles = {
  heading: {
    padding: '20px',
  },
  button: {
    padding: '10px',
    color: 'white',
  },
}
class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    const { classes } = this.props

    return (
      <header className={`row d-flex justify-content-end ${classes.heading}`}>
        <Link to={'/team'}>
          <Button className={classes.button}>Team</Button>
        </Link>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
