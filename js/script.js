"use strict";

// STYLE NAVIGATION
const navLinks = document.querySelectorAll(".nav__container__link");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const exploreBtn = document.querySelector(".btn--explore");
const body = document.querySelector("body");

const navLinkUnderLiner = (currentlyUnderlined, link) => {
  currentlyUnderlined.classList.add("nav-underline-hidden");
  currentlyUnderlined.classList.remove("nav-underline");
  let toBeUndereline = link.nextElementSibling;
  toBeUndereline.classList.add("nav-underline");
  toBeUndereline.classList.remove("nav-underline-hidden");
};

const homePageGetter = () => {
  header.classList.remove("header--modifier");
  nav.classList.remove("nav--modifier");
  main.classList.add("main--modifier");
  body.style.overflow = "hidden";
};

const restPageGetter = () => {
  header.classList.add("header--modifier");
  nav.classList.add("nav--modifier");
  main.classList.remove("main--modifier");
  body.style.overflowY = "scroll";
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    let currentlyActive = document.querySelector(".nav-underline");
    if (e.target === currentlyActive) return;
    else {
      navLinkUnderLiner(currentlyActive, navLink);
    }

    if (e.target === navLinks[0]) {
      homePageGetter();
    } else {
      restPageGetter();
    }
  });
});

exploreBtn.addEventListener("click", () => {
  navLinkUnderLiner(navLinks[0].nextElementSibling, navLinks[1]);
  restPageGetter();
});

nav.addEventListener("click", (e) => {
  console.log(e);
});

//Skill Section

const skillLevels = document.querySelectorAll(".scale__inner-container");

const skills = {
  python: "95%",
  css: "95%",
  html: "70%",
  javascript: "65%",
  django: "40%",
  c: "55%",
};

function scaleFinder(skillIndex) {
  if (skillIndex === 0) {
    return skills.python;
  } else if (skillIndex === 1) {
    return skills.css;
  } else if (skillIndex === 2) {
    return skills.html;
  } else if (skillIndex === 3) {
    return skills.javascript;
  } else if (skillIndex === 4) {
    return skills.django;
  } else if (skillIndex === 5) {
    return skills.c;
  }
}

skillLevels.forEach((skill, index) => {
  skill.style.width = scaleFinder(index);
});
