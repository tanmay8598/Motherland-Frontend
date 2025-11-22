"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import apiClient from "@/api/client";
import toast from "react-hot-toast";

export default function LoginModal({ mobile, setMobile, email, setEmail, setOpen, setIsVerificationModalOpen, isEmailMode, setIsEmailMode }) {
  // const [mobile, setMobile] = useState("");
  // const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  
  

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);

    setError(value.length !== 10 ? "Mobile number must be 10 digits" : "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setError(!emailRegex.test(value) ? "Enter a valid email address" : "");
  };

  const toggleMode = () => {
    setIsEmailMode(!isEmailMode);
    setError("");
  };

  const handleSendOtp = async () => {
    const url = `/user/${isEmailMode ? "login-with-email" : "login-with-mobile"}`
    console.log("url", url)
    try {
      setLoading(true)
      const response = await apiClient.post(url, {
        [isEmailMode ? "email" : "mobile"]: isEmailMode ? email : mobile,
      })
      console.log("response", response)
      if(!response.ok) {
        // setError(response?.data?.message)
        return
      }
      // toast.success(i18n?.language === "en" ? response?.data?.message?.en : response?.data?.message?.ar)
      toast.success(response?.data?.message)
      setOpen(false)
      setIsVerificationModalOpen(true)
      // if(isEmailMode) {
      //   setEmail("")
      // } else {
      //   setMobile("")
      // }
    } catch (error) {
      toast.error(error?.message)
      console.log("Failed to send OTP")
    } finally {
      setLoading(false)
    }
  }

  const isMobileValid = !isEmailMode && mobile.length === 10;
  const isEmailValid = isEmailMode && email;
  const isDisabled = !isMobileValid && !isEmailValid;

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 h-48 md:h-auto relative flex flex-col justify-end p-8 text-white bg-[url('/images/loginBanner.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="relative z-10 max-w-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
            Sweet to Have You Here
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed drop-shadow">
            Log in and continue your journey with an experience inspired by honey.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 p-6 md:p-10 bg-gray-100">
        <h3 className="text-xl font-semibold text-gray-700 mb-1">Login to Continue</h3>
        <p className="text-gray-500 text-sm mb-6">
          {isEmailMode
            ? "Enter your email to receive a verification code."
            : "Enter your mobile number to receive a verification code."}
        </p>

        <div className="mb-5">
          <label className="text-gray-600 text-sm font-medium mb-2 block">
            {isEmailMode ? "Email Address" : "Mobile Number"}
          </label>

          <div
            className={`flex items-center bg-gray-100/40 border rounded-lg px-4 transition w-full ${
              error
                ? "border-red-400"
                : (isMobileValid || isEmailValid)
                ? "border-green-500"
                : "border-gray-300"
            }`}
          >
            {!isEmailMode ? (
              <div className="flex items-center gap-2 pr-3 border-r border-gray-300">
                <span>🇮🇳</span>
                <span className="text-sm text-gray-700 font-medium">+91</span>
              </div>
            ) : (
              <div className="flex items-center  border-gray-300">
                <MdOutlineMail className="text-gray-700" />
              </div>
            )}

            <input
              type={isEmailMode ? "email" : "text"}
              value={isEmailMode ? email : mobile}
              onChange={isEmailMode ? handleEmailChange : handleMobileChange}
              maxLength={isEmailMode ? undefined : 10}
              inputMode={isEmailMode ? "email" : "numeric"}
              placeholder={isEmailMode ? "Enter email address" : "Enter mobile number"}
              className="flex-1 py-3 px-3 bg-gray-100 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <button
          onClick={handleSendOtp}
          disabled={isDisabled}
          className={`w-full text-white py-3 rounded-xl hover:cursor-pointer font-semibold shadow-md transition bg-gradient-to-r from-primary-400 to-secondary-300 ${
            !isDisabled
              ? "hover:scale-[1.01] hover:shadow-lg cursor-pointer"
              : "opacity-60 cursor-not-allowed"
          }`}
        >
          Send OTP
        </button>

        <div className="flex items-center my-6 text-gray-400">
          <span className="flex-1 border-t"></span>
          <span className="px-3 text-sm">or continue with</span>
          <span className="flex-1 border-t"></span>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full rounded-lg bg-gray-100 p-3 flex items-center justify-center gap-3 text-gray-700 text-sm font-medium hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-md hover:shadow-lg">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <button
            onClick={toggleMode}
            className="w-full rounded-lg bg-gray-100 p-3 flex items-center justify-center gap-3 text-gray-700 text-sm font-medium hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-md hover:shadow-lg"
          >
            {isEmailMode ? (
              <>
                <FaPhone size={20} />
                Continue with Phone
              </>
            ) : (
              <>
                <MdEmail size={20} />
                Continue with Email
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-5 text-center">
          By continuing, you agree to our Terms & Conditions.
        </p>
      </div>
    </div>
  );
}