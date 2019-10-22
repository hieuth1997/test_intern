import React, { Component } from 'react';
import Topsong from '../../components/Topsong/Topsong'
import { Container, Row, Col } from 'reactstrap';
import './style.scss';
import { connect } from 'react-redux';
import LightSpeed from 'react-reveal/LightSpeed';
import { actFetchTopSong } from '../../actions';

class Topmusic extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {
        this.props.fetchTopSong()
    }


    render() {
        let { datas } = this.props;
        const topMusic = datas.map((data, index) => {
            return <Col key={index} sm="6" md="3">
                <div className="d-flex mb-sm-3 justify-content-center">
                    <LightSpeed left> <Topsong url={data.previewUrl} img={data.artworkUrl100} title={data.trackName} name={data.artistName} /></LightSpeed>
                </div>
            </Col>
        })
        return (
            <section id="section-1">

                <div className="top-music">
                    <div className="bg-top-music" />
                    <Container>
                        <div className="music-content">
                            <div className="title">
                                <h2>The List of Top Song</h2>
                            </div>

                        </div>
                        <Row>
                            {topMusic}
                        </Row>
                    </Container>

                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        datas: state.topMusic

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTopSong: () => {
            dispatch(actFetchTopSong())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topmusic)
