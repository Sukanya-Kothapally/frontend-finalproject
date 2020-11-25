import React from "react";
import axios from "axios";
import {HorizontalBar} from 'react-chartjs-2';

class VisibilityChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       Data:{}
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
        const vis=[];
             var temp = (response.data.current.visibility) * 0.000621371;
             vis.push(temp);
            //console.log(vis)
        this.setState({
          Data:{
            labels: ['Visibilty'],
            datasets: [
              {
                label: 'Visibilty',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 0,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: vis

              }
            ]
            
        },
        })
      })
  
    }
    render() {
      return(
        <div>
             <HorizontalBar
              data={this.state.Data}
              height={30}
            />
  
        </div>
      );
  
  
    }
  }
  export default VisibilityChart;