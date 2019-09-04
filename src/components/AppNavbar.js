import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { text } from '../colorscheme'

const styles = {
  container: {
    maxWidth: 'calc(315px + 5vmax)',
    margin: 'auto'
  },
  navbarHeading: {
    fontWeight: 900,
    color: text,
  },
  link: {
    fontWeight: 800,
  }
}

class AppNavbar extends Component {
  state = {
    collapsed: false
  }

  toggleNavbar = () => {
    this.setState(state => ({
      collapsed: !this.state.collapsed
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Navbar color="fade" dark>
          <NavbarBrand className="mr-auto">
            <span className={classes.navbarHeading}>
              Our Apps
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className={`mr-2 ${classes.toggler}`} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://rctech.club/sls">
                  <span className={classes.link}>
                    Smart Laundry System
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withStyles(styles)(AppNavbar)
