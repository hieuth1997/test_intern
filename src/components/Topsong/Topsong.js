import React, { Component } from 'react';
import './style.scss'

class Topsong extends Component {
    render() {
        return (
            <div className="album-top">
                <div className="image-album">
                    <img alt="song" src={this.props.img} />
                    <div className="overlay">
                       <a className="text-color"rel="noopener noreferrer" target="_blank" href={this.props.url}> <i className="fa fa-play-circle"></i></a>

                    </div>

                </div>
                <div className="name-album">
                    <div className="content">
                        <span className="title">{this.props.title}</span>
                        <span className="name-single">{this.props.name}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topsong;
