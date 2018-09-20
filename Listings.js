const moment = require('moment');

const listing1 = {
  address: "5038 Awesome St.",
  listedPrice: 103500,
  dateListed: moment('2018-05-26').format('MMMM D YYYY')
};

const listing2 = {
  address: "502 Meh St.",
  listedPrice: 650000,
  dateListed: moment('2018-06-30').format('MMMM D YYYY')
};

const listing3 = {
  address: "349 Cool St.",
  listedPrice: 500750,
  dateListed: moment('2018-07-23').format('MMMM D YYYY')
};

module.exports = {listing1, listing2, listing3};