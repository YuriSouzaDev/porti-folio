"use strict";

function initLogoChange() {
  const logoH1 = document.querySelector(".logo h1");

  if (window.matchMedia("(max-width:768px)").matches) {
    logoH1.innerHTML = "Y<span>S</span>";
  }
}

initLogoChange();

function initMenuScroll() {
  const header = document.querySelector(".js-header");

  // CHANGE HEADER ON SCROLL
  window.addEventListener("scroll", () => {
    header.classList.toggle("ativo", scrollY > 100);
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
  });
}

initMenuScroll();

function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  function closeMenu(e) {
    e.preventDefault();
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  backToTop.addEventListener("click", closeMenu);

  // BACK TO TOP BUTTON
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("ativo", scrollY > 200);
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
  });
}

initBackToTop();

function initMenuHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");
  const linksIntenos = document.querySelectorAll(".js-menu a[href^='#']");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  function closeMenu(e) {
    e.preventDefault();
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  linksIntenos.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

initMenuHamburger();

function initSmoothScroll() {
  const menuItems = document.querySelectorAll('.js-menu a[href^="#"]');

  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }
}

initSmoothScroll();

function initColorMode() {
  // CHANGE MODE COLOR
  const checkbox = document.querySelector(".js-checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark_theme");
    document.body.classList.toggle("light_theme");
  });
}

initColorMode();

const sections = document.querySelectorAll(".js-scroll");

function initAnimacaoScroll() {
  // CREATE A ANIMATION ON SCROLL TO SHOW OR HIDE OBJECT
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
