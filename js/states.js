let isDarkMode =
  window.localStorage.getItem(IS_DARK_MODE_KEY) ?? DEFAULT_IS_DARK_MODE;
let fontSize = window.localStorage.getItem(FONT_SIZE_KEY);
fontSize = fontSize == null ? DEFAULT_FONT_SIZE : fontSize;
let fontFamily =
  window.localStorage.getItem(FONT_FAMILY_KEY) ?? DEFAULT_FONT_FAMILY;
let fontOptionsVisibility = window.localStorage.getItem(
  FONT_OPTIONS_VISIBILITY_KEY
);
fontOptionsVisibility =
  typeof fontOptionsVisibility === "string"
    ? fontOptionsVisibility === "false"
      ? false
      : true
    : fontOptionsVisibility ?? DEFAULT_FONT_OPTIONS_VISIBILITY;
