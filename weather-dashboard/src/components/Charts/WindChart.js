import React from "react";
import axios from "axios";
import {Electricity} from 'react-environment-chart';

class Windchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         wind:undefined,
        height:undefined,
        //  option:undefined
        }
        };
        componentDidUpdate(prevProps) {
            if (
              prevProps.lat !== this.props.lat ||
              prevProps.lon !== this.props.lon
            ) {
              this.componentDidMount();
            }
          }
          componentDidMount = () =>{   
            axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=61d5f8577e9dc21f1a56b94167a17bf8&units=imperial")
            .then((response) => {
                const win = response.data.current.wind_speed;
                console.log(win);
                this.setState({
                    wind:win,  
                    height:180                
                
                })
            });
            }
          render(){
              return(
                  <div>
                      <p>Wind Speed</p>
                      <Electricity 
                      value={this.state.wind}
                      height={this.state.height}
                      />
                  </div>
              );
          }
        }
export default Windchart;