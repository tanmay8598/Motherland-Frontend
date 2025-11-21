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

const ClientOnly = ({ children }) => {
  const [user, setUser] = useState();

  // const restoreUser = async () => {
  //   const user = await sessionStorage.getItem("token");
  //   if (user) setUser(jwtDecode(user));
  // };

  // useEffect(() => {
  //   restoreUser();
  // }, []);

  return (
    <>
      <MobileNavbar />
      <main className="relative overflow-hidden mt-16 lg:mt-20">
        {children}

        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default ClientOnly;
