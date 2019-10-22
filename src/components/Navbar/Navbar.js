import React, { Component } from 'react';
import logo from './../../assets/img/icon-header.png';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import './style.scss';

export class Navfixed extends Component {

  render() {

    return (
      <Navbar color-on-scroll="300" className={this.props.changeNav ? "navbar-transparent nav-scored custom-nav" : "navbar-transparent custom-nav"} expand="md">

        <NavbarBrand className="">
          <img alt="logo" src={logo} className="custom-logo" />
        </NavbarBrand>
        <button
          className="navbar-toggler navbar-toggler-right"
          id="navbar-transparent"
          type="button"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
          }}
        >
          <i className="fa fa-bars text-color"></i>
          <span className="navbar-toggler-bar" />
          <span className="navbar-toggler-bar" />
          <span className="navbar-toggler-bar" />
        </button>
        <UncontrolledCollapse className="pr-4" navbar toggler="#navbar-transparent">
          <Nav className="ml-auto text-center" navbar>
            <NavItem>

              <NavLink className="text-color" href="#root" >
                Home
                    </NavLink>
            </NavItem>
            <NavItem>


              <NavLink className="text-color" href="#section-1">
                Top Music
              </NavLink>
            </NavItem>
            <NavItem>


              <NavLink className="text-color" href="#search">
                Search
                    </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-color" href="#about">
                About
                    </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-color" href="https://www.facebook.com/hieuth1997" target="_blank">
                <i
                  aria-hidden={true}
                  className="fa fa-facebook-official"
                />

                <span className="ml-1">facebook</span>
              </NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    );
  }
}

export default Navfixed;
