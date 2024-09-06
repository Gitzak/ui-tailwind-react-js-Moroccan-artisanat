import React from "react";
import {
  ShoppingCartIcon, // Shop eCommerce
  WrenchScrewdriverIcon, // Workshop
  HandThumbUpIcon, // Hand (Support)
  GlobeAltIcon, // Mondial (International Promotion)
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "السوق الإلكتروني",
    description:
      "شري المنتوجات المغربية الأصيلة من عند الحرفيين والحرفيات اللي كيخدمو بمهارة وعناية. كل منتوج عندو حكاية وكل صانع عندو قصة.",
    icon: ShoppingCartIcon,
  },
  {
    name: "ورشات عمل",
    description:
      "شارك فالتجارب ديال الحرفيين باش تتعلم كيفاش كتصنع المنتوجات المغربية بيدك. ورشات اللي كتجمع بين التعلم والمتعة.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "دعم الحرفيين",
    description:
      "حنا هنا باش نساعدو الحرفيين والصانعات باش يلقاو الدعم اللي خاصهم، سواء من ناحية الترويج ولا التسويق ولا حتى من ناحية تطوير المهارات.",
    icon: HandThumbUpIcon,
  },
  {
    name: "الترويج الدولي",
    description:
      "كنساعدو الحرفيين باش يوصلو المنتوجات ديالهم للأسواق الدولية. نوفر ليهم الدعم التقني والتسويقي باش يتوسعوا خارج الحدود.",
    icon: GlobeAltIcon,
  },
];

const Feature = () => {
  return (
    <div id="section2" className="bg-white py-24 sm:py-32 rtl font-noto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600" data-aos="fade-down">
            غايتنا هي نساعدو الصانع التقليدي{" "}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-down">
            الخدمات اللي كنقدموها{" "}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-down">
            هاد المنصة كتوفر مجموعة من الخدمات اللي كتهدف باش تدعم الحرفيين
            والحرفيات المغاربة، وتوصل المنتوجات ديالهم لكل مغربي ومغربية
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16" data-aos="fade-down">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
