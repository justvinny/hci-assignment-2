document.addEventListener("DOMContentLoaded", () => {
  // Constants
  const IS_DARK_MODE_KEY = "isDarkMode";

  // States
  let isDarkMode = window.localStorage.getItem(IS_DARK_MODE_KEY) ?? "no";

  // Functions
  const displayTheme = () => {
    if (isDarkMode === "yes") {
      $("#theme-switch").removeClass("btn-dark").addClass("btn-warning");
      $("#theme-switch-text").text("Light Mode");
      $("span#theme-switch-icon").text("light_mode");
      $("body").removeClass("theme-light").addClass("theme-dark");
      $("nav, section#top-container")
        .removeClass("space-blue-bg")
        .addClass("space-blue-bg-dark");
      $("button#floating-up-button")
        ?.removeClass("space-blue-bg")
        .addClass("space-blue-bg-dark");
      $("img#introduction-image").attr("src", "assets/undraw_hello_dark.svg");
      $("img#method-image").attr("src", "assets/undraw_processing_dark.svg");
      $("img#findings-image").attr(
        "src",
        "assets/undraw_customer_survey_dark.svg"
      );
      $("img#qualitative-analysis-image").attr(
        "src",
        "assets/undraw_segment_analysis_dark.svg"
      );
      $("img#conclusion-image").attr("src", "assets/undraw_mic_drop_dark.svg");
      $("img.person-male").attr("src", "assets/undraw_male_avatar_dark.svg");
      $("img.person-female").attr("src", "assets/undraw_female_avatar_dark.svg");
    } else {
      $("#theme-switch").removeClass("btn-warning").addClass("btn-dark");
      $("#theme-switch-text").text("Dark Mode");
      $("span#theme-switch-icon").text("dark_mode");
      $("body").removeClass("theme-dark").addClass("theme-light");
      $("nav, section#top-container")
        .removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("button#floating-up-button")
        ?.removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("img#introduction-image").attr("src", "assets/undraw_hello.svg");
      $("img#method-image").attr("src", "assets/undraw_processing.svg");
      $("img#findings-image").attr("src", "assets/undraw_customer_survey.svg");
      $("img#qualitative-analysis-image").attr(
        "src",
        "assets/undraw_segment_analysis.svg"
      );
      $("img#conclusion-image").attr("src", "assets/undraw_mic_drop.svg");
      $("img.person-male").attr("src", "assets/undraw_male_avatar.svg");
      $("img.person-female").attr("src", "assets/undraw_female_avatar.svg");
    }
  };

  const toggleTheme = () => {
    if (isDarkMode === "yes") {
      isDarkMode = "no";
    } else {
      isDarkMode = "yes";
    }
    window.localStorage.setItem(IS_DARK_MODE_KEY, isDarkMode);
    displayTheme();
  };

  const isTopOfPage = () => {
    return $(document).scrollTop() <= 300;
  };

  const doesFloatingUpButtonExist = () => {
    return document.getElementById("floating-up-button") != null;
  };

  const createFloatingUpButton = () => {
    const backgroundColor =
      isDarkMode === "yes" ? "space-blue-bg-dark" : "space-blue-bg";
    const upButton = $(
      `<button class="${backgroundColor}" id="floating-up-button"><span class="material-symbols-outlined">arrow_upward</span></button>`
    );
    upButton.click(scrollToTop);
    return upButton;
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  // Main
  displayTheme();
  $("#theme-switch").click(toggleTheme);

  // Scroll Event
  document.addEventListener("scroll", () => {
    if (!isTopOfPage() && !doesFloatingUpButtonExist()) {
      $("body").append(createFloatingUpButton());
    } else if (isTopOfPage() && doesFloatingUpButtonExist()) {
      $("button#floating-up-button").remove();
    }
  });
});
