import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicationNumber: {
      type: String,
      required: true,
      unique: true
    },

    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true
    },

    childName: {
      type: String,
      required: true,
      trim: true
    },

    dateOfBirth: {
      type: Date,
      required: true
    },

    placeOfBirth: {
      type: String,
      required: true,
      trim: true
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true
    },

    fatherName: {
      type: String,
      required: true,
      trim: true
    },

    motherName: {
      type: String,
      required: true,
      trim: true
    },

    fatherCitizenshipNumber: {
      type: String,
      required: true
    },

    motherCitizenshipNumber: {
      type: String,
      required: true
    },

    wardNumber: {
      type: Number,
      required: true
    },

    municipality: {
      type: String,
      required: true
    },

    district: {
      type: String,
      required: true
    },

    province: {
      type: String,
      required: true
    },

    contactNumber: {
      type: String,
      required: true
    },

    documentType: {
      type: String,
      enum: [
        "Hospital Birth Report",
        "Vaccination / Immunization Card",
        "Other Supporting Document"
      ],
      required: true
    },

    documentFile: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Under Review",
        "Documents Required",
        "Approved",
        "Rejected",
        "Completed"
      ],
      default: "Pending"
    },

    rejectionReason: {
      type: String,
      default: ""
    },

    adminRemarks: {
      type: String,
      default: ""
    },

    certificateNumber: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Application", applicationSchema);