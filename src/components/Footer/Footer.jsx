import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center py-4 bg-red-900 text-white">
      <p className="text-sm font-noto">
        &copy; {currentYear} Made In Morocco. جميع الحقوق محفوظة
      </p>
    </footer>
  );
};

export default Footer;