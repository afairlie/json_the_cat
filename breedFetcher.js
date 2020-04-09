const request = require('request');
const arg = process.argv.slice(2, 3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  console.log(error);
  if (error) {
    console.log('THAT\'S NOT A CAT!!!');
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});