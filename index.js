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
