import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
    recordedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Activity = mongoose.model('Activity', activitySchema);