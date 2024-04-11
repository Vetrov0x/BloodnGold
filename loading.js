document.addEventListener("DOMContentLoaded", () => {
    const scene = document.querySelector("a-scene");
    const loadingScreen = document.getElementById("loading-screen");
    let progress = 0;

    const simulateProgress = () => {
      if (progress < 95) {
        progress += 1;
        loadingScreen.querySelector(
          ".loading-text"
        ).textContent = `Loading Magic... ${progress}%`;
        setTimeout(simulateProgress, 100);
      }
    };

    simulateProgress();

    scene.addEventListener("loaded", function () {
      progress = 100;
      loadingScreen.querySelector(".loading-text").textContent =
        "Get ready";
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
      }, 3000);
    });
  });