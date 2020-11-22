import React, { Component } from "react";
import axios from "axios";
import CurrentWeather from "../Currentweather/current";


class GetLocation extends Component {
  state = {
    latitude: undefined,
    longitude : undefined,
  };

  onClickGetLocation = (event) =>{
      event.preventDefault();
    let currentComponent = this;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        //console.log(position);
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" +lon +"&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8")
       .then((response) => {
          //const name = response.data.name;
          const lon = response.data.coord.lon;
          const lat = response.data.coord.lat;
          currentComponent.setState({
            latitude: lat,
            longitude: lon,
          });
        });
      });
    }
  }
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" ml-auto col-md-6  col-sm-6  ">
            <div className="input-row">            
                <button
                  type="submit"
                  className="btnSearch btn "
                  onClick={this.onClickGetLocation}>
                  GetLocation
                </button>
            </div>
          </div>
          <div className="col-10">
              <CurrentWeather
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default GetLocation;
