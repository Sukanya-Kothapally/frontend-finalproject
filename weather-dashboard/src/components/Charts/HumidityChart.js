import React, {Component} from "react";
import {Humidity} from 'react-environment-chart';
import axios from "axios";


class HumidityChart extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          humidity: undefined,
          height: undefined,
        };
      }

      componentDidUpdate(prevProps) {
        if (
          prevProps.lat !== this.props.lat ||
          prevProps.lon !== this.props.lon
        ) {
          this.componentDidMount();
        }
      }

      componentDidMount = () => {
        
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&appid=61d5f8577e9dc21f1a56b94167a17bf8&units=imperial"
            )
          .then((response) => {
            const hum = response.data["current"].humidity;

            this.setState({
                humidity: hum,
                height: 120,
            })
        });
      };
    

     render() {
        return (
          <div>
              <p className="humidity">Humidity</p>
              <Humidity
                height = {this.state.height}
                value = {this.state.humidity} />
          </div>
        );
    }
}
    
export default HumidityChart;