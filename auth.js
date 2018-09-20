const passport = require('passport');
const passportJwt = require('passport-jwt');
const User = require('./models/User').model;
const cfg = require('./config');
const ExtractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;
const options = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
};

module.exports = () => {
  let strategy = new Strategy(options, (payload, done) => {
    User.findById(payload.id)
    .then(user => {
      return done(null, {
        id: user.id
      });
    })
    .catch(err => {
      return done(new Error("User not found"), null);
    })
  });

  passport.use(strategy);
  
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate('jwt', cfg.jwtSession);
    }
  };
};
