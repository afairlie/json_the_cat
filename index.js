const arg = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(arg, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});