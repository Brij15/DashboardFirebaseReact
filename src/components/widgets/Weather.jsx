import React from 'react';

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
}

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    // OpenWeatherMap api url for getting weather details
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);
    const apiKey = '3e818b5e30626215d9f2a7a11e2bff2f';
    url += `&appid=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let cont = <div></div>
    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      console.log(weather);
      cont = <div>
        <p>Location : {weather.name}</p>
        <p>Temperature : {temp.toFixed(1)} degrees</p>
        <p>longitude : {weather.coord.lon}</p>
        <p>latitude : {weather.coord.lat}</p>
        <p>Wind Speed : {weather.wind.speed}</p>
        <p>Weather Condition : {weather.weather[0].main}</p>
      </div>
    } else {
      cont = <div className='loading'>loading weather...</div>
    }
    return (
      <div>
        <div className='weather'>
          {cont}
        </div>
      </div>
    );
  }

}