import mongoose from "mongoose";

const clientProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: String,
    phone: String,
    budget: {
      type: String,
      enum: ["< ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"],
    },
    plan: String,
    role: String,
    stage: String,
    services: [String],
    description: String,
    urgency: String,
  },
  { timestamps: true },
);

export default mongoose.model("ClientProfile", clientProfileSchema);
