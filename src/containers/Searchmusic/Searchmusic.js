import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Searchsong from './../../components/Searchsong/Searchsong';
import { Input } from 'antd';
import './style.scss';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { actRequestSearchSong } from '../../actions';
const { Search } = Input;

class Searchmusic extends Component {
    onSearch = (value) => {
        let content = value.replace(" ", "+")
        this.props.fetchSearchSong(content)

    }
    render() {
        const datas = this.props.datas;
        const showSearch = datas.map((data, index) => {
            return <Searchsong key={index} img={data.artworkUrl60} title={data.trackName} name={data.artistName} url={data.previewUrl} />
        })
        return (
            <section id="search" className="page-search">
                <Container>
                    <div className="d-flex justify-content-center">
                        <h2>Search your Music</h2>

                    </div>

                    <h3 className="text-center">please input your song and click the button to search</h3>
                    <Row>
                        <Col>
                            <Search
                                placeholder="Name of song"
                                enterButton="Search"
                                size="large"
                                onSearch={this.onSearch} />
                        </Col>
                    </Row>
                    <div className="custom-search">
                        <Row>
                            {
                                showSearch
                            }

                        </Row>
                    </div>


                </Container>

            </section>
        );
    }


}
const mapStateToProps = state => {
    return {
        datas: state.searchMusic,

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchSearchSong: (value) => {
            dispatch(actRequestSearchSong(value))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchmusic)