import React from 'react';
import Row from '../components/Row';
import Col from "../components/Col";
import Projects from '../components/Projects'
// import Container from "../components/Container";
import '../App.css';
import projects from '../projects.json';
// import {Link} from 'react-router-dom';



class About extends React.Component{
    state={
        projects
    }
    render(){
    return(
        <div>
            <div className="card">
            <div className="card-header">
              <h3>About Me</h3>
            </div>
            {/* <Container> */}
                <Row>
                    <Col size="md-12">
                    <img src={require("../images/my-passport-photo.jpg")} alt="profile" className="profile"/>
                    <br/>
                    <br/>
                    
                    <p className="para-one right">
                    I am a Full Stack Web Developer with a background in Software Quality Assurance and Testing. I am passionate about effectively combining creativity and problem solving to develop user-friendly applications.
                    Known for attention to detail no matter the complexity of the project. Adept at prioritizing to achieve individual and team goals while completing tasks on a deadline.
                    <p>I enjoy Home organization and Interior Designing in my spare time.</p>
                    </p>

                    <br/>
                 
                    <br/>
                    <br/>

                    <h6><strong>TECHNICAL SKILLS :</strong></h6> 
                    <ul className="about right-less">
                      <p>HTML5, CSS3, Bootstrap,Javascript, React, APIs, JSON,AJAX, Node.js,Express, MongoDB, GIT, GitHub, Functional Testing, Regression Testing, Mobile Testing, Selenium Webdriver, Python.</p>
                    </ul>

                    <h6><strong>PROJECTS:</strong></h6>

                    {this.state.projects.map(project=>(
                        <Projects 
                            name={project.name}
                            description={project.description}
                            technologies={project.technologies}
                            Github={project.Github}
                            Heroku={project.Heroku}
                        />
                        ))}


                    {/* <h6><strong>EXPERIENCE: </strong></h6>
                    <div className="exp-one right-less">
                        <strong>Mobile Test Engineer </strong> <span className="dur-one">12/2019 – Present</span>
                        <p><strong>Tech Mahindra Americas Inc.; Redmond, WA</strong></p>
                        <p>Administered mobile device testing of android devices for T-mobile service providers. Executed functionality, accessibility, performance and security test cases of Android Mobile devices. Employed adb command line and KatalonStudio.</p>
                    </div>

                    <div className="exp-two right-less">
                        <strong>Quality Assurance Tester</strong> <span className="dur-two">05/2019 –12/2019</span>                                                                                                     
                        <p><strong>Apple Inc.; Sunnyvale, CA</strong></p>
                        <p>Prepared Test Plan, Test Cases covering the Business Requirements. Performed UI, Functional,Regression and Layout testing of Apple’s Pricing App on devices such as iPhone, iPad, iMac, Apple Watch and Homepod. Wrote automated scripts with XPath, ID, Class Name to identify web elements for a new feature. Utilized Git, Jenkins, Radar, Flex, and Quip.</p>
                        <ul> 
                        <li>Ensured meeting deadlines and delivered an assignment within scope by taking complete ownership of a project release including the QA handoff.</li>
                        </ul>
                    </div>
                    <div className="exp-three right-less">
                    <strong>Test Engineering Analyst</strong> <span className="dur-three">01/2014 –11/2016</span>
                    <p><strong>Accenture Services Private Ltd.; Bangalore,India</strong></p>
                    <p>Project Names: France Telecom, Pfizer </p>
                    <p>Worked on various projects performing Functional, End-to-End, Regression, Integration, Sanity testing of Siebel CRM Application.Created, documented and executed test scripts as per the Project Requirements using FD’s (High level Functional Documents). Performed Web Services testing using SOAP UI and XML. Analyzed the Solution’s Requirement document, designed and executed test cases, logged and tracked defects in HP Application Lifecycle Management. Worked on Database testing including development of SQL queries to extract,verify and validate data from the source tables. Employed HP ALM, Siebel CRM, SOAP UI, Oracle 11g, Oracle OSM, Toad, and Unix.</p>  
                    <ul>
                        <li>Won the Apex award for best Individual Performer.</li>
                    </ul>


                    </div> */}
                    </Col>
                </Row>
            {/* </Container> */}
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
}

export default About;