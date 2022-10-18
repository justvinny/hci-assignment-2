document.addEventListener("DOMContentLoaded", () => {
  // Functions
  const displayTheme = () => {
    if (isDarkMode === "yes") {
      $("#theme-switch").removeClass("btn-dark").addClass("btn-warning");
      $("#theme-switch-text").text("Light Mode");
      $("#theme-switch-icon")
        .attr("src", "./assets/light_mode_black_24dp.svg")
        .attr("alt", "Light Mode - Sun Icon");
      $("body").removeClass("theme-light").addClass("theme-dark");
      $("nav, section#top-container")
        .removeClass("space-blue-bg")
        .addClass("space-blue-bg-dark");
      $("button#floating-up-button")
        ?.removeClass("space-blue-bg")
        .addClass("space-blue-bg-dark");
      $("button#floating-font-options-toggle")
        ?.removeClass("space-blue-bg")
        .addClass("space-blue-bg-dark");
      $("button.btn-font-size")
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
      $("img.person-female").attr(
        "src",
        "assets/undraw_female_avatar_dark.svg"
      );
      $("span.header-font.font-space-blue")
        .removeClass("font-space-blue")
        .addClass("font-white");
    } else {
      $("#theme-switch").removeClass("btn-warning").addClass("btn-dark");
      $("#theme-switch-text").text("Dark Mode");
      $("#theme-switch-icon")
        .attr("src", "./assets/dark_mode_white_24dp.svg")
        .attr("alt", "Dark Mode - Crescent Moon Icon");
      $("body").removeClass("theme-dark").addClass("theme-light");
      $("nav, section#top-container")
        .removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("button#floating-up-button")
        ?.removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("button#floating-font-options-toggle")
        ?.removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("button.btn-font-size")
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
      $("span.header-font.font-white")
        .removeClass("font-white")
        .addClass("font-space-blue");
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

  // Main
  displayTheme();
  $("#theme-switch").click(toggleTheme);
});
