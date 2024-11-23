document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animated-text");

  const words = [
    "Software Engineer.",
    "Lifelong learner.",
    "Detail-oriented individual.",
    "Quick learner.",
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
        complete: function () {
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

  document.querySelector(".view-resume").addEventListener("click", function () {
    document.querySelector("#resume_screen").style.display = "inline";
  });

  document.querySelector(".close_btn").addEventListener("click", function () {
    document.querySelector("#resume_screen").style.display = "none";
  });

  // Theme Control
  function applyTheme(theme) {
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const contentElements = document.querySelectorAll(".content");
    const textElements = document.querySelectorAll("h3, p, a");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    if (theme === "dark") {
      body.style.color = "white";
      body.style.backgroundColor = "#000302";
      navbar.classList.add("navbar-dark", "bg-dark");
      navbar.classList.remove("bg-light");
      contentElements.forEach((el) => el.classList.remove("border"));
      textElements.forEach((el) => (el.style.color = "white"));
      dropdownMenus.forEach((el) => (el.style.backgroundColor = "black"));
    } else {
      body.style.color = "black";
      body.style.backgroundColor = "";
      navbar.classList.add("bg-light");
      navbar.classList.remove("navbar-dark", "bg-dark");
      contentElements.forEach((el) => el.classList.add("border"));
      textElements.forEach((el) => (el.style.color = "black"));
      dropdownMenus.forEach((el) => (el.style.backgroundColor = "white"));
    }
  }

  function setTheme(theme) {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }

  function loadTheme() {
    const storedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
    applyTheme(storedTheme);
  }

  // Event Listeners for theme buttons
  document.querySelector(".light-theme-btn").addEventListener("click", () => {
    setTheme("light");
  });

  document.querySelector(".dark-theme-btn").addEventListener("click", () => {
    setTheme("dark");
  });

  // Apply the theme on page load
  loadTheme();
});
