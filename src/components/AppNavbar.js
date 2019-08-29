import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const styles = {

}

class AppNavbar extends Component {
  state = {
    collapsed: true
  }

  toggleNavbar = () => {
    this.setState(state => ({
      collapsed: !this.state.collapsed
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navbar color="white" light>
          <NavbarBrand className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Link 2</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withStyles(styles)(AppNavbar)
