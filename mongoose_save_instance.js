const db = require('./mongoDB_connection');

const User = require('./mongoose_models/users');
const joker = new User({
  name: 'Joker'
});

joker.save()
  .then( (user) => {
    console.log(user);
    db.connection.close();
  })
