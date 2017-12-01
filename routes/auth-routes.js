const router = require('express').Router();
const passport = require('passport');


router.get('/checkAuth', (req, res) => {
  if (req.user) {
    res.send({ isLoggedIn: true, user: req.user });
  } else {
    res.send({ isLoggedIn: false });
  }
});

router.get('/login', passport.authenticate('google', {
  scope: ['profile'],
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
