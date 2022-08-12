const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Require your User Model here!
const User = require('../models/user');
// configuring Passport!
// Called whenever a User logs in:

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) { // Called every single time a User logs in.
    console.log(profile, '<--- User Profile');
    // The user has logged in via OAuth!
    // Refer to the lesson plan from earlier today in order to set this up.

    const user = await User.findOne({googleId: profile.id});
    if (user) return cb(null, user);

    // Else statement: Adding a new user to the database.
    try {
        const newUser= await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
        })
        return cb(null, newUser);

    } catch(err) {
      return cb(err)
    }

  }
));

// This will return the data that passport will add to the cooke to track the User.
passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

// This is called every time a request comes in from a User. 
passport.deserializeUser(function(userId, done) {
  User.findById(userId, function(err, userDocument) {
    if(err) return cb(err);
    done(null, userDocument);

  })
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
});



