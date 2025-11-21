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
import OtpLoginModal from "../Modals/OTPLoginModal";
import Modal from "../Modals/Modal";

const ClientOnly = ({ children }) => {
  const [user, setUser] = useState();

  // const restoreUser = async () => {
  //   const user = await sessionStorage.getItem("token");
  //   if (user) setUser(jwtDecode(user));
  // };

  // useEffect(() => {
  //   restoreUser();
  // }, []);

  const [open, setOpen] = useState(false)

  console.log("open", open)

  return (
    <>
      <MobileNavbar setOpen={setOpen} />
      <main className="relative overflow-hidden mt-16 lg:mt-20">
        {children}
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <OtpLoginModal />
        </Modal>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default ClientOnly;
