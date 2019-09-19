const mobileMenu = () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close");

  mobileMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (!menu.classList.contains("open")) {
      menu.style.transition =
        "transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)";

      setTimeout(() => {
        menu.removeAttribute("style");
      }, 1000);
    }

    closeBtn.classList.toggle("mobile-menu-close");
  });
};

export default mobileMenu;
