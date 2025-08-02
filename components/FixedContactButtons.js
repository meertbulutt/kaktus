import React from "react";

const FixedContactButtons =   ({
  whatsappNumber = "+905346413326",
  phoneNumber = "+905346413326",
}) => {
  return (
    <div
      aria-label="İletişim butonları"
      className="fixed bottom-5 right-5 flexflex-col mb-20 space-y-2 flex-wrap gap-3 max-w-[200px] z-50"
    >
      {/* WhatsApp Butonu */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25d366] shadow-md text-white hover:brightness-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path fill="white" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.97 11.97 0 002.11 6.52L0 24l5.6-2.86a11.91 11.91 0 006.38 1.82c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.46-8.48zM12 21.8a9.73 9.73 0 01-5.2-1.54l-.37-.22-3.31 1.69 1.69-3.29-.23-.38a9.68 9.68 0 0115.23-12.8 9.6 9.6 0 01-6.81 16.54zm5.38-7.38c-.29-.15-1.71-.84-1.97-.94-.26-.11-.45-.15-.64.15-.19.3-.74.94-.9 1.13-.16.19-.32.22-.6.07-.29-.15-1.23-.45-2.35-1.46-.87-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.6.13-.12.29-.32.44-.48.15-.16.2-.28.3-.46.1-.19.05-.35-.02-.5-.07-.15-.64-1.53-.88-2.11-.23-.55-.47-.48-.64-.48-.16 0-.35-.02-.54-.02-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .15.19 2.01 3.06 4.87 4.29.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.07 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34z" />
        </svg>
      </a>

      {/* Telefon Butonu */}
      <a
        href={`tel:${phoneNumber.replace(/\D/g, "")}`}
        aria-label="Telefonla arama yap"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 shadow-md text-white hover:brightness-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path fill="white" d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.21 11.21 0 003.51.56 1 1 0 011 1v3.75a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.75a1 1 0 011 1 11.21 11.21 0 00.56 3.51 1 1 0 01-.24 1.05z" />
        </svg>
      </a>
    </div>
  );
};

export default FixedContactButtons;
