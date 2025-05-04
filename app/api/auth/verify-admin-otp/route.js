import { NextResponse } from "next/server";
import ConnectDB from "@/app/configs/connectDB";
import AdminModel from "@/app/models/AdminModel";

export async function POST(req) {
  await ConnectDB();

  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    if (admin.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // Mark admin as verified and clear OTP
    admin.isVerified = true;
    await admin.save();
    admin.otp = undefined;

    return NextResponse.json({
      success: true,
      message: "Admin account verified successfully",
    });
  } catch (error) {
    console.error("Error verifying admin OTP:", error);
    return NextResponse.json(
      { success: false, message: "Server error during verification" },
      { status: 500 }
    );
  }
}
