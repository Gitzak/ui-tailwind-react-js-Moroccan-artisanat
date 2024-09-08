import React, { useEffect } from "react";
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import MainLayout from "../components/MainLayout/MainLayout";
import { scrollToTop } from "../utils/scrollUtils";

const BlogPost = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <MainLayout>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-36 rtl">
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
                        <svg
                            x="50%"
                            y={-1}
                            className="overflow-visible fill-gray-50"
                        >
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
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-gray-600 mb-5">
                                    <time
                                        dateTime="الأحد 8 شتنبر 2024 - 20:18"
                                        className="text-gray-500"
                                    >
                                        الأحد 8 شتنبر 2024 - 10:00
                                    </time>
                                </p>

                                <a
                                    href="#"
                                    className="relative mb-3 z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    الصناعة التقليدية
                                </a>

                                <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl font-noto">
                                    الصناعة التقليدية المغربية في 2024
                                </h1>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img
                                        alt="أحمد"
                                        src="./../images/users-blog/user3-blog.jpg"
                                        className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                أحمد
                                            </a>
                                        </p>
                                        <p className="text-gray-600">
                                            كاتب ومدون
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-6 text-xl leading-8 text-gray-700 font-noto">
                                    الصناعة التقليدية المغربية كانت ولازالت جزء
                                    كبير من الهوية الثقافية ديال البلاد. من
                                    الفخار اللي كيتمزج فيه الفن والإتقان، حتى
                                    الزرابي اللي كتحكي قصص عريقة من التراث
                                    المغربي، كيبقى كل منتوج كيحمل في طياته قرون
                                    ديال التقاليد. الصناع التقليديين ورثو الحرف
                                    هادي على جيل لجيل، وكل واحد فيهم كيزيد لمسته
                                    الخاصة، اللي كتخلّي المنتوجات المغربية عندها
                                    طابع فريد كيعرفو بيه الناس عبر العالم.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-gray-700 font-noto">
                                    فـ 2024، الصناعة التقليدية المغربية كتعيش
                                    طفرة جديدة مع دخول التكنولوجيا فمجال الإنتاج
                                    والتسويق. بزاف ديال الصناع بدو يستخدمو
                                    الإنترنت باش يوصلو الحرف ديالهم لأكبر عدد من
                                    الزبائن سواء داخليا ولا خارجيا. هاد التحول
                                    الرقمي ساعد الصناع التقليديين باش يكبرو
                                    الأسواق ديالهم ويعرضو المنتوجات ديالهم فـ
                                    منصات عالمية، وهادي فرصة زوينة باش يطور
                                    الدخل ديالهم ويحافظو على الحرف.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-gray-700 font-noto">
                                    غير أن التحدي الكبير كيبقى فـ الحفاظ على
                                    الأصالة ديال الصناعة التقليدية مع استخدام
                                    الوسائل الحديثة. الصناع التقليديين خاصهم
                                    يلقاو التوازن ما بين استخدام الآلات الرقمية
                                    والتقنيات الجديدة بدون ما يفقدو الروح
                                    التقليدية ديال المنتوجات. هاد المزيج بين
                                    الأصالة والتجديد هو اللي كيبقى التحدي
                                    الحقيقي فـ 2024.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-gray-700 font-noto">
                                    في النهاية، الصناعة التقليدية كتزيد تعزز
                                    مكانتها فـ الاقتصاد الوطني، وكاتساهم فـ خلق
                                    فرص عمل جديدة وكتسهم فـ التعريف بالثقافة
                                    المغربية على الصعيد العالمي. فـ 2024، كيبقى
                                    الأمل هو أن الجيل الجديد يولي عندو وعي
                                    بأهمية هاد الحرف ويحافظ عليها باش تبقى
                                    فالريادة وتبقى رمز من رموز الهوية المغربية.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="./../images/blog-1.jpg"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default BlogPost;
