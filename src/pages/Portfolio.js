import React from 'react';
import Row from '../components/Row';
import Col from "../components/Col";
import Container from "../components/Container";
import '../App.css'

class Portfolio extends React.Component{
    render(){
    return(
        <Container>
        <Row>
            <Col size="col-sm-12">
                <h2>Portfolio</h2>        
            </Col>
        </Row>
        <Row>
            <Col size="col-sm-12" className="applications">
            <div className="card text-center" >
        {/* <div className="card-header">
          <h4>Link</h4>
        </div> */}
        <div className="card-body">
          <div className="row" id="contact">
            <div className="col-sm-12">
                <div className="info">
                <a className="nav-link resume" href="https://docs.google.com/document/d/1Fpuy-CaWzRVWclNiTW2A8hYmkcYZVrF6AqMvQOk9q54/edit?usp=sharing" ><i className="far fa-file-alt"></i> Resume</a>

              </div>
        </div>
        </div>
        </div>
        </div>

            </Col>
        </Row>

        <Row className="row row-cols-1 row-cols-md-3">

        <Col size="col mb-4">
            <div className="card portfolio-one">
                        <img src={require("../images/NewsFlash.png")} className="card-img-top img-one" alt="..."/>
                        <div className="card-footer">
                            <small><strong>News Flash</strong></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-two">
                        <img src={require("../images/GoogleBooks.png")} className="card-img-top img-two" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Google Book Search</strong></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-three">
                        <img src={require("../images/CodingQuiz.png")} className="card-img-top img-three" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Coding Quiz</strong></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-four">
                        <img src={require("../images/DayPlanner.png")} className="card-img-top img-four" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Day Planner</strong></small>
                          </div>
            </div>
            </Col>



            <Col size="col mb-4">
            <div className="card portfolio-eight">
                        <img src={require("../images/accenture.jpg")} className="card-img-top img-eight" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Accenture</strong></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-nine">
                        <img src={require("../images/apple.png")} className="card-img-top img-nine" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Apple</strong></small>
                          </div>
                      </div> 
            </Col>
            <Col size="col mb-4">
            <div className="card portfolio-ten">
                            <img src={require("../images/TechM.jpg")} className="card-img-top img-ten" alt="..."/>
                            <div className="card-footer">
                                <small ><strong>Tech Mahindra</strong></small>
                              </div>
                          </div>
            </Col>
            <Col size="col mb-4">
                        <div className="card portfolio-seven">
                            <img src={require("../images/Rendezvous.png")} className="card-img-top img-seven" alt="..."/>
                            <div className="card-footer">
                                <small ><strong>Rendezvous</strong></small>
                              </div>
                    </div>
                  </Col>
                  <Col size="col mb-4">
                    <div className="card portfolio-five" >
                        <img src={require("../images/NoteTaker.png")} className="card-img-top img-five" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Note Taker</strong></small>
                          </div>
                </div>
              </Col>

                <Col size="col mb-4">
                    <div className="card portfolio-six" >
                        <img src={require("../images/Interior Designing.jpg")} className="card-img-top img-six" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Interior Designing</strong></small>
                        </div>
                </div>
            </Col>

            <Col size="col mb-4">
                    <div className="card portfolio-eleven" >
                        <img src={require("../images/WeatherForecast.png")} className="card-img-top img-eleven" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Weather Forecast</strong></small>
                        </div>
                </div>
            </Col>

        </Row>
        <br/>
        <br/>

        </Container>
    )
}
}
export default Portfolio;