const mongoose = require ('mongoose');
const FlatCoupon = mongoose.model ('FlatCoupon');
const PercentageCoupon = mongoose.model ('PercentageCoupon');

module.exports = app => {
  app.get ('/api/fetchPercentCoupons', async (req, res) => {
    try {
      const percentageCoupons = await PercentageCoupon.find ({});

      if (percentageCoupons) {
        res.send (percentageCoupons);
      } else {
        throw new Error ({Error: 'No Coupon found'});
      }
    } catch (e) {
      console.log (e);
      res.status (400).send (e);
    }
  });

  app.post ('/api/createPercentCoupon', async (req, res) => {
    const {
      code,
      startDate,
      endDate,
      minimumCartvalue,
      percentDiscount,
      maxAllowedDiscount,
    } = req.body;
    let newCoupon, existingCoupon, err;
    try {
      existingCoupon = await PercentageCoupon.findOne ({code});
      if (existingCoupon) {
        err = new Error ('Coupon code already in use');
        throw err;
      } else {
        newCoupon = await new PercentageCoupon ({
          code,
          startDate,
          endDate,
          minimumCartvalue,
          percentDiscount,
          maxAllowedDiscount,
        }).save ();
      }
      res.send (newCoupon);
    } catch (err) {
      res.send (err);
    }
  });
};
