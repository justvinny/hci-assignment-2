document.addEventListener("DOMContentLoaded", () => {
  // Functions
  const isIntroductionVisible = () =>
    $(document).scrollTop() >= $("#introduction").offset().top;

  const isAboutUsVisible = () =>
    $(document).scrollTop() + $(window).height() >= $("#about-us").offset().top;

  const doesFloatingUpButtonExist = () => {
    return document.getElementById("floating-up-button") != null;
  };

  const createFloatingUpButton = () => {
    const upButton = $(
      `<button class="${getBackgroundColor()}" id="floating-up-button"><span class="material-symbols-outlined">arrow_upward</span></button>`
    );
    upButton.click(scrollToTop);
    return upButton;
  };

  const getBackgroundColor = () =>
    isDarkMode === "yes" ? "space-blue-bg-dark" : "space-blue-bg";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const createFontOptionsToggler = () => {
    const upButton = $(
      `<button class="${getBackgroundColor()}" id="floating-font-options-toggle"><span class="material-symbols-outlined">visibility</span></button>`
    );
    upButton.click(toggleFontOptionsVisibility);
    return upButton;
  };

  const toggleFontOptionsVisibility = () => {
    if (isFontOptionsVisible()) {
      $("div#container-font-size").css("visibility", "hidden");
      $("select.font-family").css("visibility", "hidden");
      $("button#floating-font-options-toggle > span").text("visibility_off");
      fontOptionsVisibility = "hidden";
    } else {
      $("div#container-font-size").css("visibility", "visible");
      $("select.font-family").css("visibility", "visible");
      $("button#floating-font-options-toggle > span").text("visibility");
      fontOptionsVisibility = "visible";
    }
    window.localStorage.setItem(
      FONT_OPTIONS_VISIBILITY_KEY,
      fontOptionsVisibility
    );
  };

  const isFontOptionsVisible = () => {
    return (
      $("div#container-font-size").css("visibility") === "visible" &&
      $("select.font-family").css("visibility") === "visible"
    );
  };

  const initFontOptionsVisiblity = () => {
    $("div#container-font-size").css("visibility", fontOptionsVisibility);
    $("select.font-family").css("visibility", fontOptionsVisibility);
    const visibilityIcon =
      fontOptionsVisibility === "visible" ? "visibility" : "visibility_off";
    $("button#floating-font-options-toggle > span").text(visibilityIcon);
  };

  const createFontSizeAdjuster = () => {
    const inputFontSize = $(
      `<input id="input-font-size" disabled value="${fontSize}">`
    );
    const buttonPlus = $(
      `<button class="btn-font-size ${getBackgroundColor()}">+</button>`
    );
    buttonPlus.click(incrementFontSize);
    const buttonMinus = $(
      `<button class="btn-font-size rotate-180 ${getBackgroundColor()}">-</button>`
    );
    buttonMinus.click(decrementFontSize);
    const buttonGroupFontSize = $(
      `<div class="d-flex flex-column" id="container-font-size"></div>`
    );
    buttonGroupFontSize
      .append(buttonPlus)
      .append(inputFontSize)
      .append(buttonMinus);

    return buttonGroupFontSize;
  };

  const incrementFontSize = () => {
    if (fontSize < MAX_FONT_SIZE) {
      $("p").css("font-size", `${++fontSize}px`);
      $("input#input-font-size").val(fontSize);
      window.localStorage.setItem(FONT_SIZE_KEY, `${fontSize}`);
    }
  };

  const decrementFontSize = () => {
    if (fontSize > MIN_FONT_SIZE) {
      $("p").css("font-size", `${--fontSize}px`);
      $("input#input-font-size").val(fontSize);
      window.localStorage.setItem(FONT_SIZE_KEY, `${fontSize}`);
    }
  };

  const createFontPicker = () => {
    const fontPicker = $(`<select class="font-family">
    ${FONT_FAMILY_LIST.map(
      (fontFamilyElement) =>
        `<option value='${fontFamilyElement.value}'${addOptionSelectedIfMatch(
          fontFamilyElement.value
        )}>${fontFamilyElement.text}</option>`
    )}
  </select>`);
    fontPicker.on("change", changeFontFamily);
    return fontPicker;
  };

  const addOptionSelectedIfMatch = (passedFontFamily) => {
    return passedFontFamily === fontFamily ? " selected" : "";
  };

  const changeFontFamily = (event) => {
    fontFamily = event.currentTarget.value;
    window.localStorage.setItem(FONT_FAMILY_KEY, fontFamily);
    $("p,a,span:not(.material-symbols-outlined)").css(
      "font-family",
      `${fontFamily}`
    );
  };

  // Scroll Event
  document.addEventListener("scroll", () => {
    if (
      isIntroductionVisible() &&
      !isAboutUsVisible() &&
      !doesFloatingUpButtonExist()
    ) {
      $("body").append(createFloatingUpButton());
      $("body").append(createFontOptionsToggler());
      $("body").append(createFontSizeAdjuster());
      $("body").append(createFontPicker());
      initFontOptionsVisiblity()
    } else if (
      (!isIntroductionVisible() || isAboutUsVisible()) &&
      doesFloatingUpButtonExist()
    ) {
      $("button#floating-up-button").remove();
      $("button#floating-font-options-toggle").remove();
      $("div#container-font-size").remove();
      $("select.font-family").remove();
    }
  });
});
