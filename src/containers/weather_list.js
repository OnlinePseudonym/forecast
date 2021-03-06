import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list
            .map(weather => weather.main.temp)
            .map(temp => 9 / 5 * (temp - 273) + 32)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)

        console.log(temps, humidities, pressures);
        

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="&deg;F" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&deg;F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);