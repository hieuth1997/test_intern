import React, { Component } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Sider from './../../components/Slide/Slide';
import './style.scss'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeNav: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = 300;
      if (window.scrollY > isTop) {
        this.setState({
          changeNav: true,
        })
      } else {
        this.setState({
          changeNav: false,
        })
      }

    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {

    return (
      <header >
        <Navbar changeNav={this.state.changeNav} />
        <Sider />
      </header>
    );
  }
}

export default Header;
