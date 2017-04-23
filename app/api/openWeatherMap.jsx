var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=9d58dc4f168391f9eaef2b7c61cf0019';

// api key 9d58dc4f168391f9eaef2b7c61cf0019
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message)
    });
  }
}
