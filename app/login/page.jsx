"use client";
import React, { useState } from "react";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { login } from "../../action";
import { toast } from "sonner";
import useUserStore from "../../store/userStore";

const Page = () => {
  const { setAdmin } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailValidation, setEmailValidation] = useState({
    isValid: false,
    message: "",
    type: "",
  });

  const validateEmail = (email) => {
    if (!email) {
      setEmailValidation({ isValid: false, message: "", type: "" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValidation({
        isValid: false,
        message: "Please enter a valid email address",
        type: "error",
      });
    } else {
      setEmailValidation({
        isValid: true,
        message: "Email looks good",
        type: "success",
      });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    if (loginError) setLoginError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (loginError) setLoginError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValidation.isValid || !password) {
      return;
    }

    setIsLoading(true);
    setLoginError("");

    try {
      await login({ email, password });
      // If we reach here without redirect, something went wrong
    } catch (error) {
      // Only handle actual errors, not redirects
      if (error?.digest?.startsWith("NEXT_REDIRECT")) {
        // This is the redirect - it's working!
        return;
      }
      
      setLoginError("Login failed. Please try again.");
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && emailValidation.isValid && password && !isLoading) {
      handleSubmit(e);
    }
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          CUNO COVO
        </h1>
        <p className="text-lg text-center font-bold mb-4">Admin Panel</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                  emailValidation.type === "error"
                    ? "border-red-300"
                    : emailValidation.type === "success"
                    ? "border-green-300"
                    : "border-gray-300"
                }`}
                placeholder="your@email.com"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {loginError && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="text-red-500" size={16} />
              <p className="text-sm text-red-600">{loginError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!emailValidation.isValid || !password || isLoading}
            className={`w-full py-4 px-6 rounded-full font-semibold transition-colors ${
              emailValidation.isValid && password && !isLoading
                ? "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;