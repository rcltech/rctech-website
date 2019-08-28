import React, { Component } from 'react'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'gatsby'
import Logo from './Logo'
import { text } from '../colorscheme'

const styles = {
  heading: {
    padding: '20px',
  },
  button: {
    padding: '10px',
    marginLeft: '20px',
  },
  buttonText: {
    fontSize: '18px',
    textTransform: 'none',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 900,
    color: text,
  },
  logoText: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 900,
    color: text,
    fontSize: '18px'
  },
}
class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    const { classes } = this.props

    return (
      <header className={`d-flex align-items-center ${classes.heading}`}>
        <div className={'col-5 col-sm-2'}>
          <Logo />
        </div>
        <div className={'d-none d-sm-block'}>
          <Link to={'/team'} style={{textDecoration: 'none'}}><h1 className={classes.logoText}>RC Tech Club</h1></Link>
        </div>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
