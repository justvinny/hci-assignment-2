document.addEventListener("DOMContentLoaded", () => {
  // States
  let isDarkMode =
    window.localStorage.getItem(IS_DARK_MODE_KEY) ?? DEFAULT_IS_DARK_MODE;
  let fontSize = window.localStorage.getItem(FONT_SIZE_KEY);
  fontSize = fontSize == null ? DEFAULT_FONT_SIZE : fontSize;

  // Functions
  const isTopOfPage = () => {
    return $(document).scrollTop() <= 300;
  };

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

  // Scroll Event
  document.addEventListener("scroll", () => {
    if (!isTopOfPage() && !doesFloatingUpButtonExist()) {
      $("body").append(createFloatingUpButton());
      $("body").append(createFontSizeAdjuster());
    } else if (isTopOfPage() && doesFloatingUpButtonExist()) {
      $("button#floating-up-button").remove();
      $("div#container-font-size").remove();
    }
  });
});
