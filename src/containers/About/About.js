import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import img from './../../assets/img/avatar.jpg';
import imgEdu from './../../assets/img/uit.jpg';
import imgSkill from './../../assets/img/skill.jpg'
import './style.scss';

class About extends Component {
    render() {
        return (
            <section id="about">
                <Container className="mt-4">
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>About Me</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul className="timeline">
                                <Fade left>
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={img} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>Information</h4>
                                                <h5 className="subheading">Hieu Nguyen Trong</h5>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Looking for  an environment to improve my programing skills, gaining more experience to solve problem and fix bug.  Interested  in  web programing  want to become a senior of web developer Willing to learn new programming languages and frameworks Challenging myself in a professional workplace
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </Fade>
                                <Fade right>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={imgEdu} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>Education </h4>
                                                <h5 className="subheading">4th Student</h5>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Learning at Univercity of Information Technology VNU.<br />
                                                    My major is Network Computer and Comunications <br /> I have got 7.05/10 GPA. I have a  scholarship in  2nd semester of 2018-2019 with my scored is 8.4/10
                                              </p>
                                            </div>
                                        </div>
                                    </li>
                                </Fade>

                                <Fade left>
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={imgSkill} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>Skills</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">  Strong in HTML CSS JavaScript <br />
                                                    Have a basic  knowledge about ReactJS, Redux and use third libraly relative to ReactJS <br />
                                                    Can reading english document , Logical thinking and creative
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li>
                                        <div className="timeline-image">
                                            <span>that all</span>
                                        </div>
                                    </li>
                                </Fade>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;
