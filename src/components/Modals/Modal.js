"use client";

import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className=" absolute top-3 right-3 text-white hover:text-black hover:bg-gray-200 rounded-full p-1 transition duration-200 ease-in-out transform hover:scale-110 "
        >
          <RxCross2 size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
