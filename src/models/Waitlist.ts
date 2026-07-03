import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

// This prevents Mongoose from throwing an error in Next.js development mode
// when it tries to re-compile the model on every file save.
const Waitlist = mongoose.models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);

export default Waitlist;
