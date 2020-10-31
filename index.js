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

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => {
  console.log (`server is listinig on ${PORT}`);
});
