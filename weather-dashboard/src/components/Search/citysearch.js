import React, { Component } from "react";
import axios from "axios";
import CurrentWeather from "../Currentweather/current";

class SearchCity extends Component {
  state = {
    search: "",
    latitude: undefined,
    longitude : undefined,
  };

  OnClickCitySearch = (event) => {
    event.preventDefault();
    // localStorage.setItem("city-search", this.state.searchedCities);
    // const { search, searchedCities } = this.state;
    // searchedCities.unshift(search);
    // while (searchedCities.length > 5) {
    //   searchedCities.pop();
    // }
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.search + "&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8")
    .then((response) => {
      if (response.status === 400 || response.status === 500) {
        throw new Error(response.statusText);
      }
     // const name = response.data.name;
      const lon = response.data.coord.lon;
      const lat = response.data.coord.lat;
      //console.log(response);
      this.setState({
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
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="btnSearch btn "
                  onClick={this.OnClickCitySearch}                >
                  Search
                </button>
              </div>
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

export default SearchCity;