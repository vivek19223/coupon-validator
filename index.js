const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

require ('./models/FlatCoupon');
require ('./models/PercentageCoupon');

const keys = require ('./config/keys');

mongoose.connect (keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express ();

app.use (bodyParser.json ());

require ('./routes/coupons') (app);
require ('./routes/flatCoupons') (app);
require ('./routes/percentCoupons') (app);

if (process.env.NODE_ENV === 'production') {
  app.use (express.static ('client/build'));

  const path = require ('path');
  app.use ('*', (req, res) => {
    res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => {
  console.log (`server is listinig on ${PORT}`);
});
