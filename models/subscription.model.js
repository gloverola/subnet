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
    price: {
      type: Number,
      required: [true, 'Subscription price is required'],
      min: [0, 'Subscription price must be greater than 0'],
    },
    currency: {
      type: String,
      required: [true, 'Subscription currency is required'],
      enum: [
        'USD',
        'EUR',
        'GBP',
        'CAD',
        'AUD',
        'NZD',
        'CHF',
        'JPY',
        'CNY',
        'NGN',
      ],
      default: 'NGN',
    },
    frequency: {
      type: String,
      required: [true, 'Subscription frequency is required'],
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
      default: 'monthly',
    },
    category: {
      type: String,
      required: [true, 'Subscription category is required'],
      enum: ['sports', 'entertainment', 'news', 'education', 'other'],
      default: 'other',
    },
    paymentMethod: {
      type: String,
      required: [true, 'Subscription payment method is required'],
      trim: true,
    },
    status: {
      type: String,
      required: [true, 'Subscription status is required'],
      enum: ['active', 'cancelled', 'expired'],
      default: 'active',
    },
    startDate: {
      type: Date,
      required: [true, 'Subscription start date is required'],
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: 'Start date must be in the past',
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          // @ts-ignore
          return value > this.startDate;
        },
        message: 'Renewal date must be after start date',
      },
    },
    nextBillingDate: {
      type: Date,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Subscription user is required'],
      index: true,
    },
  },
  { timestamps: true }
);

// Automatically set renewal date if not provided
subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }

  // Automatically update the status if renewal date is in the past
  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model(
  'Subscription',
  subscriptionSchema
);

export default Subscription;
