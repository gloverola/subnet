import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
      trim: true,
      minlength: [3, 'User name must be at least 3 characters long'],
      maxlength: [50, 'User name must be less than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'User email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please use a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'User password is required'],
      minlength: [
        8,
        'User password must be at least 8 characters long',
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
