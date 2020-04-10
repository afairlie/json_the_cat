const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || response.statusCode !== 200 || JSON.parse(response.body).length === 0) {
      callback('error!!!');
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };