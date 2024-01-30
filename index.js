document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animated-text");

  const words = [
    "Software Engineer.",
    "lifelong learner.",
    "detail-oriented individual.",
    "quick learner.",
  ];
  let index = 0;

  function morphText(target, newText) {
    anime
      .timeline({ loop: false })
      .add({
        targets: target,
        opacity: 0,
        duration: 800,
        easing: "easeOutQuad",
        complete: function (anim) {
          target.innerText = newText;
        },
      })
      .add({
        targets: target,
        opacity: 1,
        duration: 500,
        easing: "easeOutQuad",
      });
  }

  function changeWord() {
    const newText = words[index];
    morphText(animatedText, newText);
    index = (index + 1) % words.length;
  }

  // Initial word change
  changeWord();

  // Set interval to change words every 2 seconds
  setInterval(changeWord, 2000);
});

document.querySelector(".view-resume").addEventListener("click", function () {
  document.querySelector("#resume_screen").style.display = "inline";
});

document.querySelector(".close_btn").addEventListener("click", function () {
  document.querySelector("#resume_screen").style.display = "none";
});

document
  .querySelector(".light-theme-btn")
  .addEventListener("click", function () {
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "";
    document.querySelector(".navbar").classList.remove("navbar-dark");
    document.querySelector(".navbar").classList.remove("bg-dark");
    document.querySelector(".navbar").classList.add("bg-light");
    document.querySelectorAll(".content").forEach(function (element) {
      element.classList.add("border");
    });
    document.querySelectorAll("h3").forEach(function (element) {
      element.style.color = "black";
    });
    document.querySelectorAll("p").forEach(function (element) {
      element.style.color = "black";
    });
    document.querySelectorAll("a").forEach(function (element) {
      element.style.color = "";
    });
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
      element.style.backgroundColor = "white";
    });
  });

document
  .querySelector(".dark-theme-btn")
  .addEventListener("click", function () {
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "#000302";
    document.querySelector(".navbar").classList.add("navbar-dark");
    document.querySelector(".navbar").classList.add("bg-dark");
    document.querySelector(".navbar").classList.remove("bg-light");
    document.querySelectorAll(".content").forEach(function (element) {
      element.classList.remove("border");
    });
    document.querySelectorAll("h3").forEach(function (element) {
      element.style.color = "white";
    });
    document.querySelectorAll("p").forEach(function (element) {
      element.style.color = "white";
    });
    document.querySelectorAll("a").forEach(function (element) {
      element.style.color = "white";
    });
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
      element.style.backgroundColor = "black";
    });
  });
