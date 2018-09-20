const listings = require('../Listings');

exports.allListings = (req, res) => {
  res.status(200).json([
    listings.listing1,
    listings.listing2,
    listings.listing3
  ]);
};