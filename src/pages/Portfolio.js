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
                <a target="_blank" href="https://newsflash-news-app.herokuapp.com/">
                        <img src={require("../images/NewsFlash.png")} className="card-img-top img-one" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small><strong>News Flash</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application provides the user with the latest news from multiple sources, ability to save the articles of interest to read at a later time, have breaking news delivered via email every 12 hrs, and provides 10 different inspirational quotes everyday</p></small>
                          </div>
                          <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/news-flash-app"><i className="fab fa-github proj1"></i></a>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-two">
            <a target="_blank" href="https://protected-badlands-58271.herokuapp.com/ ">
                        <img src={require("../images/GoogleBooks.png")} className="card-img-top img-two" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small><strong>Google Book Search</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application allows the user to query Google Books API and display/save books based on user searches</p></small>
                          </div>
                          <br/>
                          <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/google-books-search"><i className="fab fa-github proj2"></i></a>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-three">
            <a target="_blank" href="https://megha-murthy.github.io/coding-quiz/ ">
                        <img src={require("../images/CodingQuiz.png")} className="card-img-top img-three" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small><strong>Coding Quiz</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application is a timer-based quiz application that stores high scores client-side</p></small>
                          </div>
                          <br/>
                       
                          <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/coding-quiz"><i className="fab fa-github proj3"></i></a>
                          </div>
            </div>
            </Col>

            <Col size="col mb-4">
            <div className="card portfolio-four">
            <a target="_blank" href="https://megha-murthy.github.io/day-planner/ ">
                        <img src={require("../images/DayPlanner.png")} className="card-img-top img-four" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small><strong>Day Planner</strong></small>
                            <br/>
                            <br/>
                            <small><p>This is a calendar application that allows the user to save events for each hour of the day</p></small>
                          </div>
                          <br/>
                          <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/day-planner"><i className="fab fa-github proj4"></i></a>
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
                        <a target="_blank" href="https://ancient-cliffs-00912.herokuapp.com/">
                            <img src={require("../images/Rendezvous.png")} className="card-img-top img-seven" alt="..."/>
                            </a>
                            <div className="card-footer">
                                <small ><strong>Rendezvous</strong></small>
                                <br/>
                                <br/>
                                <small><p>This application allows users to someone can find like minded people with common interests</p></small>
                              </div>
                              <br/>
                              <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/Rendezvous"><i className="fab fa-github proj5"></i></a>
                          </div>
                    </div>
                  </Col>
                  <Col size="col mb-4">
                    <div className="card portfolio-five" >
                    <a target="_blank" href="https://sheltered-tundra-84827.herokuapp.com/">
                        <img src={require("../images/NoteTaker.png")} className="card-img-top img-five" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small><strong>Note Taker</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application is used to write,save and delete user notes. This app uses an express backend to save and retrieve note data from a JSON file.</p></small>
                          </div>
                          <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/note-taker"><i className="fab fa-github proj6"></i></a>
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
                    <a target="_blank" href="https://megha-murthy.github.io/weather-dashboard/">
                        <img src={require("../images/WeatherForecast.png")} className="card-img-top img-eleven" alt="..."/>
                        </a>
                        <div className="card-footer">
                            <small ><strong>Weather Forecast</strong></small>
                            <br/>
                            <br/>
                            <small><p>This application allows users to someone can find like minded people with common interests</p></small>
                        </div>
                        <br/>
                      
                        <div>
                          <a className="nav-link active" target="_blank" href="https://github.com/megha-murthy/weather-dashboard"><i className="fab fa-github proj7"></i></a>
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