import React, { Component } from "react";
import axios from "axios";
import CurrentWeather from "../Currentweather/current";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import UVChart from "../Charts/UVChart";
import WindChart from "../Charts/WindChart";
import "./citysearchstyle.css";

class SearchCity extends Component {
  state = {
    name: "",
    search: "",
    latitude: undefined,
    longitude : undefined,
  };

  componentDidMount() {
    let currentComponent = this;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        //console.log(position);
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" +lon +"&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8")
       .then((response) => {
          const name = response.data.name;
          const lon = response.data.coord.lon;
          const lat = response.data.coord.lat;
          currentComponent.setState({
            latitude: lat,
            longitude: lon,
            name: name,
          });
        });
      });
    }
  }
  
  OnClickCitySearch = (event) => {
    event.preventDefault();
    axios.get
    (
      "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.search + "&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8"
    )
    .then((response) => {
      if (response.status === 400 || response.status === 500) {
        throw new Error(response.statusText);
      }
      const name = response.data.name;
      const lon = response.data.coord.lon;
      const lat = response.data.coord.lat;
      //console.log(response);
      this.setState({
        name: name,
        latitude: lat,
        longitude: lon,
      });
    });

  };

  onClickCityChange = (event) => {
    const citySearch = event.target.value;
    this.setState({
      search: citySearch,
    });
  };

  render() {
    const { name } = this.state;
    if(name){
    return (
      <div className="container">
        <div className="row">
          <div className=" ml-auto col-md-6  col-sm-6  ">
            <div className=" input-group row">
              <input
                className="inputSearch form-control"
                type="text"
                name="city"
                id="city"
                placeholder="Search by City Name"
                value={this.value}
                onChange={this.onClickCityChange}
              />&nbsp;
                <button
                  type="submit"
                  className="btnSearch btn "
                  onClick={this.OnClickCitySearch}>
                  Search
                </button>
            </div>
          </div>
          </div>
          <br /><br />
          <div className="row side">
          <div className="col-6">
              <CurrentWeather
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>
          <div className="col-6">
              <LineChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="cardbar">
                <div className="card-body">
              <BarChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="carduv">
                <div className="card-body">
              <UVChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="cardwind">
                <div className="card-body">
              <WindChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          </div>
          {/* <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="carduv">
                <div className="card-body">
              <UVChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="cardwind">
                <div className="card-body">
              <WindChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          </div> */}
        
      </div>
    );
    }
    else{
      return(
      <div className="container">
      <div className="row">
      <div className=" ml-auto col-md-6  col-sm-6  ">
        <div className=" input-group row">
          <input
            className="inputSearch form-control"
            type="text"
            name="city"
            id="city"
            placeholder="Search by City Name"
            value={this.value}
            onChange={this.onClickCityChange}
          />&nbsp;
            <button
              type="submit"
              className="btnSearch btn "
              onClick={this.OnClickCitySearch}>
              Search
            </button>
        </div>
      </div>
      </div>
      </div>
      );
    }
  }
}

export default SearchCity;