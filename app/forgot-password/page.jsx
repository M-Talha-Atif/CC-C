"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { forgotPasswordAdmin } from "../../action";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [resetEmail, setResetEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const [resetEmailValidation, setResetEmailValidation] = useState({
    isValid: false,
    message: "",
    type: "",
  });

  const validateEmail = (email) => {
    if (!email) {
      setResetEmailValidation({ isValid: false, message: "", type: "" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResetEmailValidation({
        isValid: false,
        message: "Please enter a valid email address",
        type: "error",
      });
      return false;
    } else {
      setResetEmailValidation({
        isValid: true,
        message: "Email looks good",
        type: "success",
      });
      return true;
    }
  };

  const handleResetEmailChange = (e) => {
    const value = e.target.value;
    setResetEmail(value);
    validateEmail(value);
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    if (!resetEmailValidation.isValid) {
      return;
    }

    setIsResetting(true);

    try {
      const result = await forgotPasswordAdmin(resetEmail);

      if (result.success) {
        setResetEmailSent(true);
        toast.success("Password reset email sent! Check your inbox.");
      } else {
        toast.error(result.message || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("Failed to send reset email. Please try again.");
    } finally {
      setIsResetting(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  const handleResetKeyPress = (e) => {
    if (e.key === "Enter" && resetEmailValidation.isValid && !isResetting) {
      handleForgotPasswordSubmit(e);
    }
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      <div className="w-full max-w-md">
        {/* Back button */}
        <button
          onClick={handleBackToLogin}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          disabled={isResetting}
        >
          <ArrowLeft size={20} />
          <span>Back to Login</span>
        </button>

        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
          Reset Password
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Enter your email address and we'll send you a link to reset your password
        </p>

        {!resetEmailSent ? (
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={resetEmail}
                  onChange={handleResetEmailChange}
                  onKeyPress={handleResetKeyPress}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    resetEmailValidation.type === "error"
                      ? "border-red-300"
                      : resetEmailValidation.type === "success"
                      ? "border-green-300"
                      : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                  required
                  disabled={isResetting}
                />
                {resetEmailValidation.type === "success" && (
                  <CheckCircle
                    className="absolute right-3 top-3 text-green-500"
                    size={20}
                  />
                )}
              </div>
              {resetEmailValidation.message && (
                <p
                  className={`mt-2 text-sm ${
                    resetEmailValidation.type === "error"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {resetEmailValidation.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!resetEmailValidation.isValid || isResetting}
              className={`w-full py-4 px-6 rounded-full font-semibold transition-colors ${
                resetEmailValidation.isValid && !isResetting
                  ? "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isResetting ? "Sending Reset Link..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          // Success message
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="text-green-500 mb-3" size={48} />
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Email Sent!
              </h3>
              <p className="text-sm text-green-700 text-center">
                We've sent a password reset link to <strong>{resetEmail}</strong>
              </p>
              <p className="text-sm text-green-600 text-center mt-2">
                Check your inbox and follow the instructions to reset your password.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Didn't receive the email? Check your spam folder.
              </p>
              <button
                onClick={handleBackToLogin}
                className="text-black font-semibold hover:underline"
              >
                Return to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;