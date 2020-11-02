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
                {/* <a className="nav-link resume" href="https://docs.google.com/document/d/1Fpuy-CaWzRVWclNiTW2A8hYmkcYZVrF6AqMvQOk9q54/export?format=pdf" ><i className="far fa-file-alt"></i> Resume</a> */}
                <a className="nav-link resume" href="https://drive.google.com/file/d/1Fpuy-CaWzRVWclNiTW2A8hYmkcYZVrF6AqMvQOk9q54/edit?usp=sharing"><i className="far fa-file-alt"></i> Resume</a>

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
                            <br/>
                            <br/>
                            <small><p>This application provides the user with the latest news from multiple sources, ability to save the articles of interest to read at a later time, have breaking news delivered via email every 12 hrs, and provides 10 different inspirational quotes everyday</p></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-two">
                        <img src={require("../images/GoogleBooks.png")} className="card-img-top img-two" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Google Book Search</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application allows the user to query Google Books API and display/save books based on user searches</p></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-three">
                        <img src={require("../images/CodingQuiz.png")} className="card-img-top img-three" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Coding Quiz</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application is a timer-based quiz application that stores high scores client-side</p></small>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-four">
                        <img src={require("../images/DayPlanner.png")} className="card-img-top img-four" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Day Planner</strong></small>
                            <br/>
                            <br/>
                            <small><p>This is a calendar application that allows the user to save events for each hour of the day</p></small>
                          </div>
            </div>
            </Col>



            {/* <Col size="col mb-4">
            <div className="card portfolio-eight">
                        <img src={require("../images/accenture.jpg")} className="card-img-top img-eight" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Accenture</strong></small>
                          </div>
            </div>
            </Col> */}

            {/* <Col size="col mb-4">
            <div className="card portfolio-nine">
                        <img src={require("../images/apple.png")} className="card-img-top img-nine" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Apple</strong></small>
                          </div>
                      </div> 
            </Col> */}
            {/* <Col size="col mb-4">
            <div className="card portfolio-ten">
                            <img src={require("../images/TechM.jpg")} className="card-img-top img-ten" alt="..."/>
                            <div className="card-footer">
                                <small ><strong>Tech Mahindra</strong></small>
                              </div>
                          </div>
            </Col> */}
            <Col size="col mb-4">
                        <div className="card portfolio-seven">
                            <img src={require("../images/Rendezvous.png")} className="card-img-top img-seven" alt="..."/>
                            <div className="card-footer">
                                <small ><strong>Rendezvous</strong></small>
                                <br/>
                                <br/>
                                <small><p>This application allows users to someone can find like minded people with common interests</p></small>
                              </div>
                    </div>
                  </Col>
                  <Col size="col mb-4">
                    <div className="card portfolio-five" >
                        <img src={require("../images/NoteTaker.png")} className="card-img-top img-five" alt="..."/>
                        <div className="card-footer">
                            <small><strong>Note Taker</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application is used to write,save and delete user notes. This app uses an express backend to save and retrieve note data from a JSON file.</p></small>
                          </div>
                </div>
              </Col>

                {/* <Col size="col mb-4">
                    <div className="card portfolio-six" >
                        <img src={require("../images/Interior Designing.jpg")} className="card-img-top img-six" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Interior Designing</strong></small>
                        </div>
                </div>
            </Col> */}

            <Col size="col mb-4">
                    <div className="card portfolio-eleven" >
                        <img src={require("../images/WeatherForecast.png")} className="card-img-top img-eleven" alt="..."/>
                        <div className="card-footer">
                            <small ><strong>Weather Forecast</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application allows users to someone can find like minded people with common interests</p></small>
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