"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react";
import { resetPasswordWithToken } from "../../../action";
import { toast } from "sonner";

const ResetPasswordContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState("");

  const [passwordValidation, setPasswordValidation] = useState({
    isValid: false,
    message: "",
    requirements: {
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
    },
  });

  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({
    isValid: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing reset token");
    }
  }, [token]);

  const validatePassword = (password) => {
    if (!password) {
      setPasswordValidation({
        isValid: false,
        message: "",
        requirements: {
          length: false,
          uppercase: false,
          lowercase: false,
          number: false,
        },
      });
      return;
    }

    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
    };

    const isValid = Object.values(requirements).every((req) => req);

    setPasswordValidation({
      isValid,
      message: isValid
        ? "Password meets all requirements"
        : "Password requirements not met",
      requirements,
    });
  };

  const validateConfirmPassword = (password, confirmPwd) => {
    if (!confirmPwd) {
      setConfirmPasswordValidation({
        isValid: false,
        message: "",
        type: "",
      });
      return;
    }

    if (password !== confirmPwd) {
      setConfirmPasswordValidation({
        isValid: false,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    setConfirmPasswordValidation({
      isValid: true,
      message: "Passwords match",
      type: "success",
    });
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    validatePassword(value);
    if (confirmPassword) {
      validateConfirmPassword(value, confirmPassword);
    }
    if (error) setError("");
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(newPassword, value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordValidation.isValid || !confirmPasswordValidation.isValid) {
      return;
    }

    if (!token) {
      setError("Invalid reset token");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await resetPasswordWithToken(token, newPassword);

      if (result.success) {
        setResetSuccess(true);
        toast.success("Password reset successful!");
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setError(result.message || "Failed to reset password");
        toast.error(result.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      setError("Failed to reset password. Please try again.");
      toast.error("Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  if (resetSuccess) {
    return (
      <div
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6"
        style={{ fontFamily: "Nunito Sans, sans-serif" }}
      >
        <div className="w-full max-w-md text-center">
          <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-200 rounded-lg mb-6">
            <CheckCircle className="text-green-500 mb-3" size={64} />
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              Password Reset Successful!
            </h2>
            <p className="text-green-700">
              Your password has been updated successfully.
            </p>
            <p className="text-green-600 mt-2">
              Redirecting to login page...
            </p>
          </div>
          <button
            onClick={() => router.push("/login")}
            className="text-black font-semibold hover:underline"
          >
            Go to Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
          Reset Your Password
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Enter your new password below
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                  newPassword && !passwordValidation.isValid
                    ? "border-red-300"
                    : newPassword && passwordValidation.isValid
                    ? "border-green-300"
                    : "border-gray-300"
                }`}
                placeholder="Enter new password"
                required
                disabled={isLoading || !token}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                disabled={isLoading}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Requirements */}
            {newPassword && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Password must contain:
                </p>
                <div className="space-y-1">
                  {[
                    { key: "length", text: "At least 8 characters" },
                    { key: "uppercase", text: "One uppercase letter" },
                    { key: "lowercase", text: "One lowercase letter" },
                    { key: "number", text: "One number" },
                  ].map((req) => (
                    <div key={req.key} className="flex items-center gap-2 text-sm">
                      {passwordValidation.requirements[req.key] ? (
                        <CheckCircle size={14} className="text-green-500" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-gray-300" />
                      )}
                      <span
                        className={
                          passwordValidation.requirements[req.key]
                            ? "text-green-600"
                            : "text-gray-600"
                        }
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                  confirmPasswordValidation.type === "error"
                    ? "border-red-300"
                    : confirmPasswordValidation.type === "success"
                    ? "border-green-300"
                    : "border-gray-300"
                }`}
                placeholder="Confirm new password"
                required
                disabled={isLoading || !token}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                disabled={isLoading}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {confirmPasswordValidation.type === "success" && (
                <CheckCircle
                  className="absolute right-12 top-3 text-green-500"
                  size={20}
                />
              )}
            </div>
            {confirmPasswordValidation.message && (
              <p
                className={`mt-2 text-sm ${
                  confirmPasswordValidation.type === "error"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {confirmPasswordValidation.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-500" size={16} />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={
              !passwordValidation.isValid ||
              !confirmPasswordValidation.isValid ||
              isLoading ||
              !token
            }
            className={`w-full py-4 px-6 rounded-full font-semibold transition-colors ${
              passwordValidation.isValid &&
              confirmPasswordValidation.isValid &&
              !isLoading &&
              token
                ? "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/login")}
            className="text-gray-600 hover:text-black transition-colors"
            disabled={isLoading}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
};

export default Page;