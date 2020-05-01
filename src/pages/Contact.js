import React from 'react';
import '../App.css';

function Contact(){
    return(
        <div className="card text-center" >
        <div className="card-header">
          <h2>Contact Me</h2>
        </div>
        <div className="card-body">
          <div className="row" id="contact">
            <div className="col-sm-12">
                <div className="info">
                    
                    <p className="email"><i className="fas fa-envelope"></i>  m.megha21@gmail.com</p>
                    <p className="phone"><i className="fas fa-phone-volume"></i>  607-279-9882</p>
              </div>
        </div>
        <br/>
            <div className="links">
              <ul className="nav flex-column">
                <a className="nav-link active" href="https://github.com/megha-murthy">GitHub: <i className="fab fa-github"></i></a>
                <a className="nav-link" href="https://www.linkedin.com/in/megha-murthy-0b269a45/">LinkedIn: <i className="fab fa-linkedin"></i></a>
                
              <br/>
              <br/>
            </ul>
          
          </div>  
        </div>
      </div>
      </div>
    )
}

export default Contact;