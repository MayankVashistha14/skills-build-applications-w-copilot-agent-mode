import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true },
    duration: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

export const Workout = mongoose.model('Workout', workoutSchema);