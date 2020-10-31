const mongoose = require ('mongoose');
const {Schema} = mongoose;

const FlatCouponSchema = new Schema ({
  code: String,
  startDate: {
    type: Date,
    default: Date.now (),
  },
  endDate: Date,
  minimumCartValue: Number,
  flatDiscount: Number,
});

mongoose.model ('FlatCoupon', FlatCouponSchema);
