import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
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
    fontSize: '24px',
    textTransform: 'none',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 900,
    color: text,
  },
  logoText: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 900,
    color: text,
    fontSize: '24px'
  },
}
class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    const { classes } = this.props

    return (
      <header className={`row d-flex align-items-center ${classes.heading}`}>
        <div className={'col-2'}>
          <Logo />
        </div>
        <div className={'col-7'}>
          <Link to={'/team'} style={{textDecoration: 'none'}}><h1 className={classes.logoText}>RC Tech Club</h1></Link>
        </div>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
