import React from "react";

const Numbers = () => {
  const stats = [
    { name: "حرفي مشارك", value: "1400+" },
    { name: "منتوج معروض", value: "8000+" },
    { name: "ورشة عمل مفتوحة", value: "50+" },
    { name: "طرق باش تساهم", value: "غير محدودة" },
  ];

  return (
    <div id="sectionNumbers" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="./images/img-2.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>

      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#75d169] to-[#e03139] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#75d169] to-[#e03139] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rtl font-noto">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-6xl" data-aos="fade-left">
            ساهم فالحفاظ على الحرفة المغربية{" "}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white" data-aos="fade-left">
            حنا فهاد المنصة، كنآمنو بأن كل واحد منا عندو دور باش يساهم فالحفاظ
            على الحرفة المغربية وتنميتها<br /> الهدف ديالنا هو نبنيو مجتمع ديال الناس
            اللي كيحبو الصناعة التقليدية وباغيين يشجعوها بطرق مختلفة
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse" data-aos="fade-down">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
