export const handleSmoothScroll = (e, href, offset = 70) => {
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    const offsetTop = section.offsetTop - offset; // Adjust the offset as needed
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
