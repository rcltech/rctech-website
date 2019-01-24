import React, { Component } from 'react'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'gatsby'

const styles = {
  heading: {
    padding: '20px',
  },
  button: {
    padding: '10px',
    marginLeft: '20px'
  },
  buttonText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'none'
  }
}
class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    const { classes } = this.props

    return (
      <header className={`row d-flex justify-content-end ${classes.heading}`}>
        <Link to={'/team'} style={{textDecoration: 'none'}}>
          <Button className={classes.button} key={'team'}><Typography variant={'h5'} className={classes.buttonText}>Team</Typography></Button>
        </Link>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
