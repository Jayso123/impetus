const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema(
  {
    companyHistory: {
      type: String,
      required: true,
      minlength: 200,
    },
    stats: {
      distributors: {
        type: Number,
        required: true,
        default: 0,
      },
      products: {
        type: Number,
        required: true,
        default: 0,
      },
      employees: {
        type: Number,
        required: true,
        default: 0,
      },
      teamMembers: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
      default: "Vadodara",
    },
    foundedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AboutUs", aboutUsSchema);
