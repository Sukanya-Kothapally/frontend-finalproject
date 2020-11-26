import React, {Component} from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import moment from 'moment';

class LineChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Data: {},
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
        
        console.log("Hourly");
        axios
          .get(
             "https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=61d5f8577e9dc21f1a56b94167a17bf8&units=imperial"
            )
          .then((response) => {
            console.log(response);
            var hourly = response.data["hourly"];
            //console.log(hourly);
            
            const temp_hour = [];
            const temp_temperature = [];
            for(var i=0; i<=24; i++)
            {
              temp_temperature.push(Number(hourly[i].temp.toFixed(0)));
              temp_hour.push(moment.unix(hourly[i].dt).format("hh:mm a"));
            }

            this.setState({
              Data: {
                labels: temp_hour,
                datasets: [
                  {
                    label: "Hourly",
                    data: temp_temperature,
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "#8000ff",
                    pointBorderColor: "#8000cb",
                    pointBackgroundColor: "#8000cb",
                    pointBorderWidth: 1,
                    pointHoverRadius: 4,
                    pointHoverBackgroundColor: "#8000cb",
                    pointHoverBorderColor: "#8000cb",
                    pointHoverBorderWidth: 2,
                    pointRadius: 2,
                    pointHitRadius: 11,
                  },
                ],
              },
            });
          });
      };
    

     render() {
        return (
          <div>
              <Line
                data={this.state.Data}
                height={20}
                width ={30}
                options={{
                  responsive: true,
    
                  scales: {
                    xAxes: [
                      {
                        display: true,
                      },
                    ],
                    yAxes: [
                      {
                        display: true,
                      },
                    ],
                  },
                  title:{
                    display:true,
                    text:'24 hours',
                    fontSize:20,
                    fontColor: "#222222"
                  },
                  legend: {
                      display: true,
                      position: 'top',
                    labels: {
                      fontColor: "#222222",
                      fontSize: 12,
                    },
                  },
                }}
              />
          </div>
        );
    }
}


export default LineChart;