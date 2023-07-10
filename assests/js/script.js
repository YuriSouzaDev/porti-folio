"use strict";

// CONST, VAR OR LETS
const header = document.querySelector(".header");

// CHANGE HEADER ON SCROLL
window.addEventListener("scroll", () => {
  header.classList.toggle("ativo", scrollY > 100);
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
});

// CHANGE MODE COLOR
const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark_theme");
  document.body.classList.toggle("light_theme");
});
