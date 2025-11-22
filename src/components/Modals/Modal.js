"use client";

import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen, onClose, children, className }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0  flex items-center justify-center bg-black/50 p-4 overflow-auto">
      <div className={`bg-white rounded-lg shadow-lg w-full ${className} relative max-h-[90vh] overflow-y-auto`}>
        <button
          onClick={onClose}
          className="absolute z-50 top-3 right-3 text-black hover:bg-gray-200 hover:cursor-pointer rounded-full p-1 transition duration-200 ease-in-out transform hover:scale-110 "
        >
          <RxCross2 size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
