import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './style.scss';

 class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <div className="text-center ft-content">
                        <span> © 2019 created by Hieu NT </span>

                    </div>
                </Container>

            </footer>
        );
    }
}

export default Footer;
