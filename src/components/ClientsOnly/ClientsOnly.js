// components/ClientOnly.js
"use client";
import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import AuthContext from "@/auth/context";
// import MenuNavbar from "@/components/Navbar/MenuNavbar";
// import Footer from "@/components/Footer/Footer";

import MobileNavbar from "./../Navbar/Navbar";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";
import Footer from "./../Footer/Footer";
import LoginModal from "../Modals/LoginModal";
import Modal from "../Modals/Modal";
import OTPModal from "../Modals/OTPModal";
import AuthContext from "@/auth/context";

const ClientOnly = ({ children }) => {
  const [user, setUser] = useState();

  const restoreUser = () => {
    const user = localStorage.getItem("token");
    // console.log("user", user)
    if (user) setUser(jwtDecode(user));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const [open, setOpen] = useState(false)
  const [iseVerificationModalOpen, setIsVerificationModalOpen] = useState(false)

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isEmailMode, setIsEmailMode] = useState(false);

  const [verifyLoading, setVerifyLoading] = useState(false)

  const handleOtpModalClose = () => {
    setIsVerificationModalOpen(false)
    setOtp(["", "", "", ""])
    setVerifyLoading(false)
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <MobileNavbar setOpen={setOpen} />
        <main className="relative overflow-hidden mt-16 lg:mt-20">
          {children}
          <Modal isOpen={open} onClose={() => setOpen(false)} className="max-w-3xl">
            <LoginModal mobile={mobile} setMobile={setMobile} email={email} setEmail={setEmail} setOpen={setOpen} setIsVerificationModalOpen={setIsVerificationModalOpen} isEmailMode={isEmailMode} setIsEmailMode={setIsEmailMode} />
          </Modal>
          <Modal isOpen={iseVerificationModalOpen} onClose={handleOtpModalClose} className="max-w-xl">
            <OTPModal mobile={mobile} setMobile={setMobile} email={email} setEmail={setEmail} otp={otp} setOtp={setOtp} setIsVerificationModalOpen={setIsVerificationModalOpen} isEmailMode={isEmailMode} setIsEmailMode={setIsEmailMode} verifyLoading={verifyLoading} setVerifyLoading={setVerifyLoading} />
          </Modal>
          <ScrollToTop />
        </main>
        <Footer />
      </AuthContext.Provider>
    </>
  );
};

export default ClientOnly;
