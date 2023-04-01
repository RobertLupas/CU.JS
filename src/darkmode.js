// define the function that toggles dark mode on and off
function toggleDarkMode() {
  // get the darkmode-selector button
  const darkModeSelector = document.getElementById("darkmode-selector");

  // check if user preference exists
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // check if user previously selected a preference
  const userPrefersSaved = localStorage.getItem("darkmode");

  // initialize dark mode on page load based on user preference
  if (userPrefersSaved !== null) {
    if (userPrefersSaved === "dark") {
      document.body.classList.add("dark-mode");
      darkModeSelector.checked = true;
    }
  } else if (userPrefersDark) {
    document.body.classList.add("dark-mode");
    darkModeSelector.checked = true;
  }

  // add an event listener for the darkmode-selector button
  darkModeSelector.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkmode", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkmode", "dark");
    }
  });
}

// add an event listener that waits for the HTML document to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // call the function that toggles dark mode on and off
  toggleDarkMode();
});