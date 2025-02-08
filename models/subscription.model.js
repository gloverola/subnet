import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Subscription name is required'],
      trim: true,
      minlength: [
        3,
        'Subscription name must be at least 3 characters long',
      ],
      maxlength: [
        50,
        'Subscription name must be less than 50 characters',
      ],
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model(
  'Subscription',
  subscriptionSchema
);

export default Subscription;
