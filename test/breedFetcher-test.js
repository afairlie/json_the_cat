const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // compare returned description - THIS ISN'T PASSING
      assert.equal(desc, expectedDesc);

      done();
    });
  });
  it('returns an error when an invalid cat passed', (done) => {
    fetchBreedDescription('door', (err, desc) => {
      assert.equal(err, 'error!!!');
      assert.equal(desc, null);
      done();
    })
  })
});