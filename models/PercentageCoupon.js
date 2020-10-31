const mongoose = require ('mongoose');
const {Schema} = mongoose;

const PercentageCouponSchema = new Schema ({
  code: String,
  startDate: {
    type: Date,
    default: Date.now (),
  },
  endDate: Date,
  minimumCartValue: Number,
  percentDiscount: Number,
});

mongoose.model ('PercentageCoupon', PercentageCouponSchema);
