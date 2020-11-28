import React from "react";
import "./About.css";
import jprofile from "./profile.jpg";
import spicture from "./Picture.jpeg";
class About extends React.Component {
    
    render() {
      return(
      <div>
        <h3 className="text-center abouthead">
              <span className="border p-2"><b>About Us</b></span></h3><br/>
              <div className="row p"> 
                <div className="mx-auto col-md-4 col-lg-4 col-sm-12">
                <div className="d-flex justify-content-center">
                <div className="cardabout">
                    <div className="card-body">
                          <div className="aboutname">
                              <p>Weather dashboard allows us to know 
                                about the current weather, 
                                hourly forecast for 24 hours
                                and one week forecast 
                                for both the current location 
                                or any location in the world.
                              </p>          
                            </div>
                      </div>
                    </div>
                 </div>
                 </div>
            </div>
            
      <div className="about">
          <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="mx-auto card">
                      <div className="card-img">
                          <img src={jprofile} id="image1" className="img-fluid" alt="j profilepicture" />
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">Jetha Harsha Sai Emandi</h4>
                          <p className="card-text">
                              Computer Science Graduate Student
                          </p>
                          <p className="info">Specialization in Machine Learning, Artificial Intelligence
                          and Databases.</p>
                      </div>
                      <div className="card-footer">
                          <a href="https://www.linkedin.com/in/jetha-harsha-sai-emandi/" className="card-link">LinkedIn</a>
                      </div>
                  </div>
                </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="mx-auto card">
                      <div className="card-img">
                          <img src={spicture} id="image1" className="img-fluid" alt="S profilepicture" />
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">Sukanya Kothapally</h4>
                          <p className="card-text">Computer Science Graduate Student</p>
                          <p className="info">Specialization in Software Engineering and Databases.</p>
                      </div>
                      <div className="card-footer">
                          <a href="https://www.linkedin.com/in/sukanyakothapally/" className="card-link">LinkedIn</a>
                      </div>
                  </div>
              </div>
        </div>

    </div>
    <nav className="footer navbar justify-content-center fixed-bottom">
        <small>© 2020 All rights reserved</small>
      </nav>
</div>
      );
    }
  }
  export default About;