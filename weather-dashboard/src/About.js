import React from "react";
import "./About.css";
import jprofile from "./profile.jpg";
class About extends React.Component {
    
    render() {
      return(
      <div>
        <h3 className="text-center abouthead">
              <span className="border p-2">About Us</span></h3><br/>
              <div className="row p"> 
                <div className="mx-auto col-md-4 col-lg-4 col-sm-12">
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
            
      <div className="about">
          <div className="row">
              <div className="mx-auto col-md-4 col-lg-4 col-sm-12">
                  <div className="card">
                      <div className="card-img">
                          <img src={jprofile} id="image1" className="img-fluid" alt="j profilepicture" />
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">Jetha Harsha Sai Emandi</h4>
                          <p className="card-text">
                              Computer Science Graduate Student
                          </p>
                          <p className="info">Specialization in Machine Learning and Artificial Intelligence
                          and Databases.</p>
                      </div>
                      <div className="card-footer">
                          <a href="https://www.linkedin.com/in/jetha-harsha-sai-emandi/" className="card-link">LinkedIn</a>
                      </div>
                  </div>
                </div>
              <div className="mx-auto col-md-4 col-lg-4 col-sm-12">
                  <div className="card">
                      <div className="card-img">
                          <img src="" className="img-fluid" alt="" />
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">Sukanya Kothapally</h4>
                          <p className="card-text">Computer Science Graduate Student</p>
                      </div>
                      <div class="card-footer">
                          <a href="https://www.goggle.com" className="card-link">LinkedIn</a>
                      </div>
                  </div>
              </div>
        </div>
    </div>
</div>
      );
    }
  }
  export default About;