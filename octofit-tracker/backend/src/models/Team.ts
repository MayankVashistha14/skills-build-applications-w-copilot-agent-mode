import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    memberCount: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);