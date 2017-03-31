const express = require('express');
const app = express();

var cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session',
  keys: ['Gotham','Batman'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/login',(req,res,next) => {
  // Normally check req.body and verify username/password in DB.

  req.session.jwt = 'insert JWT here';

  res.send();
});

app.listen('3000',() => {
  console.log('Listening on port 3000');
})
