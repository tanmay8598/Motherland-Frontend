"use client";

import apiClient from '@/api/client';
import useAuth from '@/auth/useAuth';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function OTPModal({ email, setEmail, mobile, setMobile, otp, setOtp, setIsVerificationModalOpen, isEmailMode, setIsEmailMode, verifyLoading, setVerifyLoading }) {
    const { logIn } = useAuth()

    const handleChange = async (value, index) => {
        if (!/^[0-9]?$/.test(value)) return
        const updatedOtp = [...otp]
        updatedOtp[index] = value
        setOtp(updatedOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus()
        }
        // else if(index === otp.length - 1) {
        //   console.log("last index", index)
        //   await handleVerifyProfile()
        // }
    }

    const handleKeyDown = (e, index) => {
        // console.log("event", e)
        if (e.key === "Backspace") {
            const updatedOtp = [...otp]

            if (!otp[index] && index > 0) {
                updatedOtp[index - 1] = ""
                document.getElementById(`otp-${index - 1}`).focus()
            } else {
                updatedOtp[index] = ""
            }
            setOtp(updatedOtp)
        }
    };

    const otpValue = otp.join("")

    // console.log("otpValue", otpValue, otpValue.length)

    const handleVerifyProfile = async () => {
        // console.log("Verifying")
        if (otpValue.length === 0) {
            toast.error("Please enter the OTP")
        }
        if (otpValue.length === 4) {
            const payload = { [isEmailMode ? "email" : "mobile"]: isEmailMode ? email : mobile, otp: otpValue }
            console.log("payload", payload)
            try {
                setVerifyLoading(true)
                const response = await apiClient.post(
                    `/user/verify`,
                    payload
                )
                console.log("verification response", response)
                if (response?.status === 400) {
                    throw new Error(response?.data?.message?.en)
                }
                if (!response.ok) {
                    throw new Error("Verification Failed")
                }

                logIn(response?.data?.accessToken)
                toast.success(response?.data?.message)
                if (isEmailMode) {
                    setEmail("")
                } else {
                    setMobile("")
                }
                setOtp(["", "", "", ""])
                setIsEmailMode(false)
                setIsVerificationModalOpen(false)
            } catch (error) {
                console.error("API Error:", error)
                toast.error(error?.message || "Verification Failed")
            } finally {
                setVerifyLoading(false)
            }
        }
    };

    const handleResendCode = async () => {
        // console.log("Resending")
        try {
            const url = `/user${isEmailMode ? "/resend-otp" : "/resend-mobile-otp"}`
            const response = await apiClient.post(url, {
                [isEmailMode ? "email" : "mobile"]: isEmailMode ? email : mobile
            })
            console.log("response", response)
            if (!response.ok) {
                throw new Error("Failed to resend otp")
            }
            toast.success(response?.data?.message)
        } catch (error) {
            toast.error(error?.message)
            console.log("Error while sending email")
        }
    }

    return (

        <div className="bg-gray-100 shadow-2xl w-full flex flex-col md:flex-row animate-fadeIn scale-100">

            <div className="hidden md:flex md:w-1/2 bg-primary-100 items-center justify-center">
                <Image
                    src="/images/otpVerification.gif"
                    alt="OTP Verification Illustration"
                    width={260}
                    height={280}
                    className="object-contain drop-shadow-md"
                    unoptimized
                />
            </div>

            <div className="relative w-full md:w-1/2 p-8 pt-12 flex flex-col items-center">

                {/* <button
                    onClick={handleModalClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary-400 transition"
                >
                    <IoClose size={26} />
                </button> */}

                <h2 className="text-xl md:text-2xl font-semibold text-primary-400 text-center mb-2">
                    {isEmailMode ? "Email Verification" : "Mobile Verification"}
                </h2>

                <p className="text-gray-500 text-center mb-6 text-xs">
                    We've sent a 4-digit code to your {isEmailMode ? "email" : "mobile"}. Enter it below to verify your account.
                </p>

                <div className="flex items-center justify-center gap-3 mb-8">
                    {otp.map((digit, index) => (
                        <input
                            id={`otp-${index}`}
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-14 text-center text-lg md:text-xl font-medium rounded-xl bg-gray-100 border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-300 outline-none transition-all shadow-sm focus:shadow-md"
                        />
                    ))}
                </div>

                <button
                    onClick={handleVerifyProfile}
                    disabled={verifyLoading}
                    className={`w-full py-3 rounded-xl font-semibold hover:cursor-pointer text-white text-base md:text-lg shadow-md transition-all flex items-center justify-center gap-2
                                ${verifyLoading
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-gradient-to-r from-primary-400 to-secondary-300 hover:scale-[1.02] hover:shadow-lg"
                        }`}
                >
                    {verifyLoading ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Verifying...
                        </>
                    ) : (
                        "Verify"
                    )}
                </button>

                <div className="mt-6 text-sm flex items-center gap-2 text-gray-500">
                    <span>Didn't receive the code?</span>
                    <button
                        onClick={handleResendCode}
                        className="text-primary-400 font-medium hover:opacity-80 hover:underline hover:cursor-pointer transition"
                    >
                        Resend
                    </button>
                </div>

            </div>
        </div>

    )
}
