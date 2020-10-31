module.exports = app => {
  app.post ('/api/createCoupon', (req, res) => {
    res.send ('create coupon');
  });

  app.get ('/api/fetchCoupons', (req, res) => {
    res.send ('Fetch coupon');
  });

  app.post ('/api/validateCoupon', (req, res) => {
    res.send ('validate coupon');
  });
};
