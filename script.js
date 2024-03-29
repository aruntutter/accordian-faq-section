"use strict";

const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".fa-caret-down");
  const answer = accordian.querySelector(".answer");

  accordian.addEventListener("click", () => {
    // icon.classList.toggle("active");
    // answer.classList.toggle("active");

    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
