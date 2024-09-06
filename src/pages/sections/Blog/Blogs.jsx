import React from "react";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "الصناعة التقليدية المغربية في 2024",
      href: "#",
      description:
        "الصناعة التقليدية المغربية مزال كتطور وكتواكب العصر. الحرفيين المغاربة اليوم كيوظفو تقنيات جديدة باش يوصلو الحرف ديالهم للعالم.",
      date: "Aug 19, 2024",
      datetime: "2024-08-19",
      category: { title: "Artisanat", href: "#" },
      author: {
        name: "أحمد",
        role: "كاتب ومدون",
        href: "#",
        imageUrl: "./images/users-blog/user3-blog.jpg",
      },
    },
    {
      id: 2,
      title: "فوائد التجارة الإلكترونية للصناعة التقليدية",
      href: "#",
      description:
        "التجارة الإلكترونية فتحت أبواب جديدة للصناعة التقليدية المغربية. الحرفيين ولاو يقدرو يوصلو للزبناء فكل بقاع العالم.",
      date: "Aug 10, 2024",
      datetime: "2024-08-10",
      category: { title: "E-commerce", href: "#" },
      author: {
        name: "سعاد",
        role: "خبيرة في التجارة الإلكترونية",
        href: "#",
        imageUrl: "./images/users-blog/user2-blog.jpg",
      },
    },
    {
      id: 3,
      title: "طرق الأداء الممكنة فالصناعة التقليدية",
      href: "#",
      description:
        "اليوم تقدر تستعمل عدة طرق أداء فالمغرب باش تخلص المنتوجات التقليدية عبر الإنترنت، بحال بطاقات الائتمان والتحويلات البنكية.",
      date: "Jul 28, 2024",
      datetime: "2024-07-28",
      category: { title: "Payments", href: "#" },
      author: {
        name: "ياسين",
        role: "متخصص في الخدمات المالية",
        href: "#",
        imageUrl: "./images/users-blog/user1-blog.jpg",
      },
    },
  ];

  return (
    <div id="section3" className="bg-gray-100 py-24 sm:py-32 rtl font-noto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-aos="fade-left"
          >
            المدونة
          </h2>
          <p
            className="mt-2 text-lg leading-8 text-gray-600"
            data-aos="fade-left"
          >
            اكتشف آخر المقالات والنصائح حول الصناعة التقليدية
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between max-w-xl items-start"
              data-aos="fade-down"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative flex-grow">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
