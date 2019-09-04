import React, { Component } from 'react'
import { withStyles, Container } from '@material-ui/core'
import Logo from './Logo'

const styles = {
  heading: {
    padding: '20px',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
}
class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container className={classes.heading}>
          <Logo />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
