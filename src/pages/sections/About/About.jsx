import React from "react";
import { handleSmoothScroll } from "../../../utils/scrollUtils";

const About = () => {
  return (
    <div
      id="section1"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-0.5 rtl font-noto"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p
                className="text-base font-semibold leading-7 text-red-600"
                data-aos="fade-down"
              >
                علاش
              </p>
              <h1
                className="mt-2 text-4xl  font-bold tracking-tight text-gray-900 leading-normal"
                data-aos="fade-down"
              >
                شنو هو هاد الموقع؟
              </h1>
              <p
                className="mt-2 text-2xl leading-10 text-gray-700"
                data-aos="fade-down"
              >
                هاد الموقع هو منصة مغربية 100% كتهتم بالصانع التقليدي والصانعة
                التقليدية المغربية. الهدف ديالنا هو نعرضو لك منتوجات اللي معمولة
                بإتقان وتاريخ طويل ديال الحرفة المغربية اللي كتعبر على الجمال
                والتفرد. <br />
                غايتنا هي نساعدو الصانع التقليدي والصانعة باش يوصلو المنتوجات
                ديالهم لكل واحد بغي يشري حاجة أصيلة ومغربية.
                <br /> كيفما كنعرضو ليك قصصهم، كنعرضو ليك المنتوجات اللي
                كيخدموها بيدهم.
              </p>
              <a
                data-aos="fade-down"
                href="#section2"
                onClick={(e) => handleSmoothScroll(e, "#section2")}
                className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                الخدمات
              </a>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="./images/img-1.jpg"
            className="w-[28rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
