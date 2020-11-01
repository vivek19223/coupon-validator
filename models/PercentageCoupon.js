const mongoose = require ('mongoose');
const {Schema} = mongoose;

const PercentageCouponSchema = new Schema ({
  code: String,
  startDate: {
    type: Date,
    default: Date.now (),
  },
  endDate: Date,
  minimumCartvalue: Number,
  percentDiscount: Number,
  maxAllowedDiscount: {
    type: Number,
  },
});

mongoose.model ('PercentageCoupon', PercentageCouponSchema);
