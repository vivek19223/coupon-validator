const mongoose = require ('mongoose');
const FlatCoupon = mongoose.model ('FlatCoupon');

module.exports = app => {
  app.post ('/api/createFlatCoupon', async (req, res) => {
    const {flatDiscount, code, startDate, endDate, minimumCartvalue} = req.body;
    let newCoupon, existingCoupon, err;
    try {
      existingCoupon = await FlatCoupon.findOne ({code});
      if (existingCoupon) {
        err = new Error ('Coupon code already in use');
        throw err;
      } else {
        newCoupon = await new FlatCoupon ({
          code,
          startDate,
          endDate,
          minimumCartvalue,
          flatDiscount,
        }).save ();
      }
      res.send (newCoupon);
    } catch (err) {
      console.log ('Error is thrown :', err);
      res.send (err);
    }
  });

  app.get ('/api/fetchFlatCoupons', async (req, res) => {
    try {
      const flatCoupons = await FlatCoupon.find ({});

      if (flatCoupons) {
        res.send (flatCoupons);
      } else {
        throw new Error ({Error: 'No Coupon found'});
      }
    } catch (e) {
      console.log (e);
      res.status (400).send (e);
    }
  });
};
