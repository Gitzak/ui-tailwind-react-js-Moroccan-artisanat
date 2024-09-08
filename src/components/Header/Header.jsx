import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { images } from "../../constants";
import Banners from "../../pages/sections/Banners/Banners";
import { handleSmoothScroll } from "../../utils/scrollUtils";

const navigation = [
    { name: "علاش؟", href: "#section1" },
    { name: "نساعدو الصانع", href: "#section2" },
    { name: "أرقام", href: "#sectionNumbers" },
    { name: "المدونة", href: "#section3" },
    { name: "تواصل معنا", href: "#section4" },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const sections = navigation
                .map((item) => {
                    const section = document.querySelector(item.href);
                    if (section) {
                        const offsetTop = section.offsetTop;
                        const offsetHeight = section.offsetHeight;
                        if (
                            currentScroll >= offsetTop - 200 &&
                            currentScroll < offsetTop + offsetHeight - 200
                        ) {
                            return item.href;
                        }
                    }
                    return null;
                })
                .filter(Boolean);

            if (sections.length > 0) {
                setActiveSection(sections[0]);
            } else {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (e, href) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => handleSmoothScroll(e, href), 100);
        } else {
            handleSmoothScroll(e, href);
        }
    };

    return (
        <section>
            <header
                id="topHeader"
                className="fixed inset-x-0 top-0 z-50 bg-red-50 backdrop-blur-md backdrop-filter bg-opacity-50 shadow-md rtl"
            >
                <Banners />
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-2 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a
                            href="#topHeader"
                            onClick={(e) => handleNavigation(e, "#topHeader")}
                            className="-m-1.5 p-1.5"
                        >
                            <span className="sr-only">Made In Morocco</span>
                            <img
                                alt=""
                                src={images.Logo}
                                className="h-24 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 rtl">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavigation(e, item.href)}
                                className={`text-md font-semibold leading-6 px-3 py-2 rounded-full font-noto ${
                                    activeSection === item.href
                                        ? "bg-red-600 text-white"
                                        : "text-dark-hard hover:bg-red-100"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            className="group inline-flex items-center justify-center rounded-full py-4 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-500 text-white hover:text-slate-100 hover:bg-red-600 active:bg-red-800 active:text-red-100 focus-visible:outline-red-600 font-noto"
                            color="red"
                            variant="solid"
                            href="#"
                        >
                            <span>أنشئ متجرك</span>
                        </a>
                    </div>
                </nav>
                <Transition appear show={mobileMenuOpen} as={React.Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-50 lg:hidden"
                        onClose={setMobileMenuOpen}
                    >
                        <TransitionChild
                            as={React.Fragment}
                            enter="transition-opacity ease-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-in duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </TransitionChild>

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <TransitionChild
                                        as={React.Fragment}
                                        enter="transform transition ease-in-out duration-500"
                                        enterFrom="translate-x-full"
                                        enterTo="translate-x-0"
                                        leave="transform transition ease-in-out duration-500"
                                        leaveFrom="translate-x-0"
                                        leaveTo="translate-x-full"
                                    >
                                        <DialogPanel className="pointer-events-auto w-screen max-w-md">
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex items-center justify-between shadow-md px-6 py-10 bg-red-50">
                                                    <a
                                                        href="#"
                                                        className="-m-1.5 p-1.5"
                                                    >
                                                        <span className="font-semibold font-noto">
                                                            Made In Morocco
                                                        </span>
                                                    </a>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setMobileMenuOpen(
                                                                false
                                                            )
                                                        }
                                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                                    >
                                                        <span className="sr-only">
                                                            Close menu
                                                        </span>
                                                        <XMarkIcon
                                                            aria-hidden="true"
                                                            className="h-8 w-8"
                                                        />
                                                    </button>
                                                </div>
                                                <div className="mt-6 flow-root px-6 py-3 rtl">
                                                    <div className="-my-6 divide-y divide-gray-500/10">
                                                        <div className="space-y-2 py-6">
                                                            {navigation.map(
                                                                (item) => (
                                                                    <a
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleNavigation(
                                                                                e,
                                                                                item.href
                                                                            )
                                                                        }
                                                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 font-noto hover:bg-red-50 ${
                                                                            activeSection ===
                                                                            item.href
                                                                                ? "bg-red-600 text-white"
                                                                                : "text-dark-hard"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </a>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="py-6">
                                                            <a
                                                                href="#"
                                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-red-50 font-noto"
                                                            >
                                                                أنشئ متجرك
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </header>
        </section>
    );
};

export default Header;
