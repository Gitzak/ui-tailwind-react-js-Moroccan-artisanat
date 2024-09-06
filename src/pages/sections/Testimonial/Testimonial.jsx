import React from "react";

const testimonials = [
  {
    name: "زينة",
    rating: 5,
    review:
      "هاد الموقع صراحة مبدع! لقيت فيه بزاف ديال المنتوجات التقليدية اللي كنت باغياها، وكلشي مصنوع بعناية وبدقة. الخدمة زوينة، والتوصيل كان سريع. كنشجع أي واحد يكتشف الصناعة المغربية من هاد المنصة.",
    image: "./images/testimonials/user3.jpg", // Replace with actual image path
    lang: "ar", // RTL language
  },
  {
    name: "Sophie",
    rating: 5,
    review:
      "J'ai été impressionnée par la qualité des produits artisanaux marocains sur cette plateforme. C'est un véritable trésor de l'artisanat. La commande a été facile et le service client très réactif. Je recommande vivement!",
    image: "./images/testimonials/user2.jpg", // Replace with actual image path
    lang: "fr", // LTR language
  },
  {
    name: "يوسف",
    rating: 5,
    review:
      "أنا فخور بكوني جزء من هاد المجتمع اللي كيقدر الحرفة المغربية. المنتوجات اللي شريتها من هاد الموقع كانت كتمثل الأصالة والجمال المغربي. تجربة زوينة من البداية حتى النهاية.",
    image: "./images/testimonials/user1.jpg", // Replace with actual image path
    lang: "ar", // RTL language
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-white rtl font-noto">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-36">
        <h2
          className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          data-aos="fade-down"
        >
          آراء الزبناء ديالنا
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className={`rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 ${
                testimonial.lang === "ar" ? "text-right" : "text-left"
              }`}
              data-aos="fade-down"
              dir={testimonial.lang === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{testimonial.review}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
