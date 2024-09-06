import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-green-900 py-16 sm:py-24 lg:py-32 rtl font-noto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="fade-left">
              سجل فالنشرة البريدية ديالنا
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300" data-aos="fade-left">
              كون على تواصل معانا وتوصل بأخبار وآخر المستجدات ديال الصناعة
              التقليدية المغربية، وكلشي بلغة ديالك.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4" data-aos="fade-left">
              <label htmlFor="email-address" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="دخل البريد الإلكتروني ديالك"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                سجل دابا
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start" data-aos="fade-left">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">مقالات أسبوعية</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                توصل بأجمل الحكايات والمقالات اللي كتعرفك على الصناعة التقليدية
                والحرف المغربية.
              </dd>
            </div>
            <div className="flex flex-col items-start" data-aos="fade-left">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">بلا سبام</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                غادي توصلك غير الأخبار اللي تهمك على الصناعة التقليدية، بلا سبام.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#75d169] to-[#e03139] opacity-30"
        />
      </div>
    </div>
  );
};

export default Newsletter;
