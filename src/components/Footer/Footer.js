import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#FFF1D9] font-figtree text-[#1E1E1E] py-10 px-5">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/logo.png"
          alt="Motherland Pure Logo"
          width={160}
          height={60}
          className="mb-2"
        />
        <p className="text-xs font-medium tracking-wide">
          NATURAL PURE & UNADULTERATED
        </p>

        <div className="flex gap-5 mt-5">
          <a href="#" aria-label="Facebook">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={52}
              height={52}
              className="hover:opacity-80  transition"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={52}
              height={52}
              className="hover:opacity-80 transition"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Image
              src="/icons/twitter.png"
              alt="Twitter"
              width={52}
              height={52}
              className="hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-around   mt-10 gap-10 text-center sm:text-left">
        <div>
          <h3 className="font-bold  mb-2 text-[#202020] text-lg">Shop</h3>
          <ul className="space-y-1 text-[#202020] text-p2-mobile">
            <li>
              <a href="#" className="hover:text-gray-600">
                Honey 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Honey 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Honey 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Honey 4
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-[#202020] text-lg">Core Links</h3>
          <ul className="space-y-1 text-[#202020] text-p2-mobile">
            <li>
              <a href="#" className="hover:text-gray-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <Image src="/images/visa.png" alt="Visa" width={45} height={30} />
        <Image src="/images/rupay.png" alt="RuPay" width={45} height={30} />
        <Image src="/images/rupay.png" alt="RuPay" width={45} height={30} />
        <Image src="/images/rupay.png" alt="RuPay" width={45} height={30} />
        <Image
          src="/images/mastercard.png"
          alt="MasterCard"
          width={45}
          height={30}
        />
        <Image src="/images/gpay.png" alt="GPay" width={45} height={30} />
      </div>

      <div className="text-center mt-6 text-sm  font-light text-[#202020]">
        © 2025, motherland
      </div>
    </footer>
  );
}

export default Footer;
