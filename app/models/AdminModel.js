import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    acceptTerms: { type: Boolean, default: true },
    otp: { type: String }, // ✅ Add OTP field
    isVerified: { type: Boolean, default: false }, // ✅ Add isVerified field
  },
  { timestamps: true }
);

export default mongoose.models.AdminModel ||
  mongoose.model("AdminModel", AdminSchema);
