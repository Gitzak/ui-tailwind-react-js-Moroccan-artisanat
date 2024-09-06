import React from "react";
import { handleSmoothScroll } from "../../../utils/scrollUtils";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-40 mt-40 px-5">
      <img
        alt=""
        src="./images/img-6.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black opacity-40"></div>
      <div className="container mx-auto text-center text-white relative">
        <h1 className="text-6xl font-bold mb-4 rtl" data-aos="fade-down">
          <span className="font-noto">مرحبا بيك ف </span>{" "}
          <span className="font-poppins">Made In Morocco</span>
        </h1>
        <h1
          className="text-6xl font-bold mb-4 rtl font-noto"
          data-aos="fade-down"
        >
          صنع في المغرب
        </h1>
        <p className="text-3xl mt-10 mb-8 rtl font-noto" data-aos="fade-down">
          {" "}
          أول موقع إلكتروني للصناعة التقليدية المغربية
        </p>
        <p className="text-3xl mb-8 rtl font-noto" data-aos="fade-down">
          اكتشف الحرف المغربية اللي معمولة بحب، مهارة، وتاريخ
        </p>
        <p className="text-xl mb-8 rtl font-noto" data-aos="fade-down">
          هنا تلقى كلشي اللي كيعكس الأصالة المغربية، من الصانع للصانعة حتى
          للمنتوج اللي كيفتخر بيه كل مغربي
        </p>
        <a
          data-aos="fade-up"
          href="#section1"
          onClick={(e) => handleSmoothScroll(e, "#section1")}
          className="inline-block px-6 py-3 text-lg font-semibold bg-red-600 text-white border border-white rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300"
        >
          اكتشف{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
