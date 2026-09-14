import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
  {
    rank: { type: Number, required: true },
    username: { type: String, required: true },
    points: { type: Number, required: true },
    streak: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);