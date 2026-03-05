import mongoose from "mongoose";

const agencyProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    agencyName: {
      type: String,
      required: true,
    },

    services: [
      {
        type: String,
      },
    ],

    industries: [
      {
        type: String,
      },
    ],

    pricingRange: {
      type: String,
    },

    teamSize: {
      type: Number,
    },

    experienceYears: {
      type: Number,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AgencyProfile", agencyProfileSchema);