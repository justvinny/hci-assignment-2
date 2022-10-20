document.addEventListener("DOMContentLoaded", () => {
  // Functions
  const isUsabilityResearchVisible = () =>
    $(document).scrollTop() >= $("#usability-research").offset().top;

  const isAboutUsVisible = () =>
    $(document).scrollTop() + $(window).height() >= $("#about-us").offset().top;

  const doesFloatingUpButtonExist = () => {
    return document.getElementById("floating-up-button") != null;
  };

  const createFloatingUpButton = () => {
    const upButton = $(
      `<button type="button" class="${getBackgroundColor()} zoom-out" id="floating-up-button"  aria-label="Scroll to top of page button.">
        <img src="./assets/arrow_upward_white_24dp.svg" alt="Up">
      </button>`
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
      `<button type="button" class="${getBackgroundColor()} zoom-out" id="floating-font-options-toggle" aria-label="Font size resizer and font family picker components visiblity toggler button.">
        <img src="./assets/visibility_off_white_24dp.svg" alt="Show">
      </button>`
    );
    upButton.click(toggleFontOptionsVisibility);
    return upButton;
  };

  const toggleFontOptionsVisibility = () => {
    fontOptionsVisibility = !fontOptionsVisibility;
    showOrHideFontOptions();
    window.localStorage.setItem(
      FONT_OPTIONS_VISIBILITY_KEY,
      fontOptionsVisibility
    );
  };

  const showOrHideFontOptions = (hasAnimationDelay = true) => {
    const classToBeRemoved = fontOptionsVisibility ? "zoom-in" : "zoom-out";
    const classToBeAdded = fontOptionsVisibility ? "zoom-out" : "zoom-in";
    [$("div#container-font-size"), $("select.font-family")].forEach(
      (component) => {
        if (hasAnimationDelay && fontOptionsVisibility) {
          component.removeClass("no-animation-delay");
        } else if (!hasAnimationDelay && !fontOptionsVisibility) {
          component.addClass("no-animation-delay");
        }
        component.removeClass(classToBeRemoved).addClass(classToBeAdded);
      }
    );

    const visibilityIcon = fontOptionsVisibility
      ? "./assets/visibility_off_white_24dp.svg"
      : "./assets/visibility_white_24dp.svg";
    $("button#floating-font-options-toggle > img").attr("src", visibilityIcon);
  };

  const createFontSizeAdjuster = () => {
    const inputFontSize = $(
      `<input id="input-font-size" disabled value="${fontSize}" title="Current font size of paragraphs.">`
    );
    const buttonPlus = $(
      `<button type="button" class="btn-font-size ${getBackgroundColor()}" aria-label="Increase font size button">+</button>`
    );
    buttonPlus.click(incrementFontSize);
    const buttonMinus = $(
      `<button type="button" class="btn-font-size rotate-180 ${getBackgroundColor()}" aria-label="Decrease font size button">-</button>`
    );
    buttonMinus.click(decrementFontSize);
    const buttonGroupFontSize = $(
      `<div class="d-flex flex-column zoom-out" id="container-font-size"></div>`
    );
    buttonGroupFontSize
      .append(buttonPlus)
      .append(inputFontSize)
      .append(buttonMinus);

    return buttonGroupFontSize;
  };

  const incrementFontSize = () => {
    if (fontSize < MAX_FONT_SIZE) {
      $("p,div.mr-auto > span").css("font-size", `${++fontSize}px`);
      $("input#input-font-size").val(fontSize);
      window.localStorage.setItem(FONT_SIZE_KEY, `${fontSize}`);
      AOS.refresh();
    }
  };

  const decrementFontSize = () => {
    if (fontSize > MIN_FONT_SIZE) {
      $("p,div.mr-auto > span").css("font-size", `${--fontSize}px`);
      $("input#input-font-size").val(fontSize);
      window.localStorage.setItem(FONT_SIZE_KEY, `${fontSize}`);
      AOS.refresh();
    }
  };

  const createFontPicker = () => {
    const fontPicker =
      $(`<select class="font-family zoom-out" title="Font Family Picker">
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
    $("p,a,span").css("font-family", `${fontFamily}`);
    AOS.refresh();
  };

  // Scroll Event
  document.addEventListener("scroll", () => {
    if (
      isUsabilityResearchVisible() &&
      !isAboutUsVisible() &&
      !doesFloatingUpButtonExist()
    ) {
      $("body").append(createFloatingUpButton());
      $("body").append(createFontOptionsToggler());
      $("body").append(createFontSizeAdjuster());
      $("body").append(createFontPicker());
      showOrHideFontOptions((hasAnimationDelay = false));
    } else if (
      (!isUsabilityResearchVisible() || isAboutUsVisible()) &&
      doesFloatingUpButtonExist()
    ) {
      [
        $("button#floating-up-button"),
        $("button#floating-font-options-toggle"),
        $("div#container-font-size"),
        $("select.font-family"),
      ].forEach((component) => {
        component.removeClass("zoom-out").addClass("zoom-in");
        component.on("animationend", () => {
          component.remove();
        });
      });
    }
  });
});
