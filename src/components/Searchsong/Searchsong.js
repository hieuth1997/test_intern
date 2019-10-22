import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './style.scss'

class Searchsong extends Component {
    render() {
        return (
            <Col md={4} className="card-col">
                <div className="card-search">
                    <div className="img">
                        <img alt="img" width="60" height="60" src={this.props.img} />
                    </div>
                    <h3>{this.props.title}</h3>
                    <div className="card-name">
                        <span>
                            {this.props.name}
                        </span>
                    </div>
                    <a className="link-search" rel="noopener noreferrer" target="_blank" href={this.props.url}> </a>

                </div>


            </Col>
        );
    }
}

export default Searchsong;
