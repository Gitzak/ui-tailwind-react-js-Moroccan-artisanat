export const handleSmoothScroll = (e, href, offset = 70) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
        const offsetTop = section.offsetTop - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

