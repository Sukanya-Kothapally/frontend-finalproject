import React ,{Component} from 'react';
import axios from "axios";

class CurrentWeather extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          name: undefined,
          temperature: undefined,
          description: undefined,
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
            "https://api.openweathermap.org/data/2.5/weather?lat="+this.props.lat+"&lon="+this.props.lon+"&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8"
            )
          .then((response) => {
              console.log(response);
            const des = response.data.weather[0].description;
            const temp = response.data.main.temp;
            const name = response.data.name;
            
            this.setState({
                name: name,
                temperature: temp,
                description: des,
            })
        });
      };
    

     render() {
        return (
          <div>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <p>{this.state.name}</p>
                        <p>{this.state.temperature}</p>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
            </div>
          </div>
        );
    }
}
    
export default CurrentWeather;