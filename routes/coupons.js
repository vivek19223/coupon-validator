const mongoose = require ('mongoose');
const FlatCoupon = mongoose.model ('FlatCoupon');
const PercentageCoupon = mongoose.model ('PercentageCoupon');
const moment = require ('moment');

module.exports = app => {
  app.post ('/api/validateCoupon', async (req, res) => {
    const {type, code, cartValue} = req.body;
    let value, coupon;
    try {
      if (type === 'flat') {
        coupon = await FlatCoupon.findOne ({code});
        if (coupon.minimumCartvalue > cartValue) {
          throw new Error (
            `Minimum cart value required is ${coupon.minCartvalue}`
          );
        } else if (coupon.endDate < moment ()) {
          throw new Error (`Coupon has expired.!!`);
        } else {
          value = cartValue - coupon.flatDiscount;
        }
      } else {
        coupon = await PercentageCoupon.findOne ({code});
        if (coupon.minimumCartvalue > cartValue) {
          throw new Error (
            `Minimum cart value required is ${coupon.minCartvalue}`
          );
        } else if (coupon.endDate < moment ()) {
          throw new Error (`Coupon has expired.!!`);
        } else {
          const calcDiscount = cartValue * coupon.percentDiscount / 100;
          const discount = calcDiscount > coupon.maxAllowedDiscount
            ? coupon.maxAllowedDiscount
            : calcDiscount;
          value = cartValue - discount;
        }
      }
      res.send ({value});
    } catch (err) {
      res.status (400).send ({err});
    }
  });
};
