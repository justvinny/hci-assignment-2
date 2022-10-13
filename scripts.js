// Mock Data
const MOCK_DATA = `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
posuere magna. Curabitur aliquet tincidunt metus in elementum.
Vestibulum eget pretium nisi. Vivamus iaculis magna id erat dapibus
mattis. Nam commodo nisi ultricies augue viverra, vitae tristique libero
sodales. Aenean posuere dui quis sem viverra tincidunt. Curabitur
euismod sit amet mauris et egestas. Integer consectetur risus sit amet
ipsum lacinia, sit amet egestas felis tempus. Aliquam mollis fringilla
diam sit amet posuere. Etiam iaculis ante a tempor sollicitudin. Morbi
ultrices et ipsum vitae fermentum. Nunc cursus fringilla libero quis
finibus. Quisque accumsan odio est, sed mollis velit suscipit ac. Nam
consequat lacus sit amet augue ullamcorper auctor.

<br /><br />Etiam sed elit magna. Nam volutpat eros at erat suscipit, et
bibendum erat varius. Curabitur lectus dolor, eleifend vel cursus in,
molestie eget velit. Sed et mollis eros. Aliquam erat volutpat. Duis
sagittis, odio non eleifend mollis, risus ipsum porttitor mauris, sed
commodo enim nisl vel mi. Integer commodo consectetur mi at gravida.
Praesent vulputate hendrerit odio, at euismod nulla eleifend non. Donec
tincidunt, nisl quis pulvinar egestas, dolor quam congue ligula, at
posuere tortor lacus non velit. Aenean sagittis lacus sem, non hendrerit
erat consectetur eget. Ut cursus, enim vitae dignissim tempus, est leo
sodales ex, ut placerat nisl libero in tortor. Curabitur dignissim nisl
elit, et vestibulum dolor pulvinar non. Etiam mollis tristique libero,
eu placerat enim eleifend non. Quisque non cursus nulla. Vivamus
facilisis magna nulla, vitae ultrices purus congue et. Donec quam ante,
aliquam et rutrum scelerisque, blandit eget turpis.

<br /><br />Cras ex augue, tincidunt eget dictum vel, iaculis in diam.
Vestibulum sed facilisis metus. Nam gravida risus non finibus ornare.
Nulla a odio quam. In ornare hendrerit lectus, quis eleifend elit
finibus quis. Vestibulum orci nunc, bibendum vel justo mattis, lacinia
vehicula lorem. Nam laoreet commodo cursus. Donec vulputate dolor quis
scelerisque vestibulum. Nulla auctor, metus pellentesque lobortis
imperdiet, nulla felis viverra risus, quis ullamcorper risus lectus non
arcu. In sit amet nulla arcu. Mauris bibendum augue sit amet commodo
condimentum. Duis lobortis convallis aliquam. Sed feugiat, quam vel
rutrum tincidunt, leo nisi sollicitudin diam, vitae ornare massa neque
vitae nibh.

<br /><br />Vivamus eu mi quis arcu lobortis feugiat nec vitae nibh.
Nulla facilisi. Etiam eget quam tempor ligula vestibulum convallis.
Vestibulum congue, ex vel dignissim sodales, sapien augue accumsan odio,
ut fringilla sem orci sit amet ex. Vestibulum feugiat justo at convallis
aliquam. Integer rutrum gravida orci et eleifend. Nulla sagittis ligula
vitae leo laoreet interdum. Mauris pretium massa at enim tincidunt, et
vestibulum velit fringilla. Aliquam vitae magna sodales, tincidunt nisl
id, commodo turpis. Etiam ultricies ante vel turpis varius dignissim.
Pellentesque non mauris eu augue suscipit ultricies. Mauris id elementum
massa, a tempus massa. Vestibulum nunc nibh, eleifend at orci et,
pellentesque consectetur turpis.

<br /><br />Quisque egestas non nisi sed convallis. Morbi id neque et
purus ultrices tempor non sit amet felis. Sed ut enim ligula. Fusce
tempus, diam vel pharetra egestas, massa dui sodales dolor, non lacinia
odio tortor at nunc. Suspendisse nec lorem ac quam finibus auctor in nec
lectus. Etiam vulputate ex a nisl eleifend ornare. Etiam imperdiet sem
eu posuere finibus.

<br /><br />Curabitur in mi ultrices, venenatis nisi eu, malesuada elit.
Duis eget ipsum nec tortor luctus commodo non vel nibh. Vestibulum ante
ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Ut iaculis neque id venenatis laoreet. Nunc porttitor turpis enim, quis
scelerisque eros imperdiet eu. Sed sed erat eget quam fringilla sodales.
Morbi facilisis, justo vel sollicitudin blandit, ipsum urna tincidunt
justo, non tincidunt nisi mi eget risus. Donec hendrerit pretium metus.
Nulla facilisi. Phasellus ultrices rutrum nisi eu pulvinar. Cras
tincidunt enim felis, quis pharetra massa consequat id.

<br /><br />In vulputate pharetra magna sit amet porta. Suspendisse sit
amet feugiat orci, at molestie turpis. Duis metus tellus, lobortis quis
augue eget, semper auctor velit. Ut orci tellus, porttitor et libero
nec, elementum varius massa. Curabitur pretium mollis nisl eu blandit.
Cras dignissim purus enim, molestie facilisis diam semper non. Nunc
convallis ante et massa vehicula hendrerit. Quisque tincidunt nisi
elementum libero commodo sodales. Nulla pellentesque nisl posuere lectus
eleifend, a condimentum turpis pretium. Vestibulum id scelerisque risus.
Duis fringilla vestibulum enim, ut hendrerit purus porttitor in.
Suspendisse vestibulum mauris et ipsum porta interdum. Quisque elementum
fermentum aliquet. In hac habitasse platea dictumst.

<br /><br />Sed tempus felis id venenatis semper. Morbi efficitur at leo
facilisis sodales. Vivamus et nisl quis sapien convallis tempus. Fusce
facilisis, nibh sed tincidunt mollis, metus est placerat lectus, vel
tempor risus neque et risus. Nam lobortis sem est, quis malesuada mi
iaculis nec. Vivamus sit amet enim faucibus, porta magna quis, tincidunt
erat. Curabitur ac pellentesque diam. Nullam rutrum nisl nec nulla
fermentum blandit. In placerat diam vitae elementum ornare. Curabitur at
egestas felis. Sed condimentum purus vel rhoncus accumsan. Proin
malesuada metus ut urna viverra elementum. Nulla diam mi, varius ut
felis at, tincidunt luctus dolor. Quisque sed sollicitudin mi. Morbi
mollis hendrerit arcu non rhoncus.

<br /><br />Duis ac aliquam velit, tincidunt tempus purus. Integer id
velit mi. Proin ac ex efficitur, posuere risus quis, mattis diam.
Phasellus porta dui sem, at sollicitudin tortor viverra non. Maecenas
vitae felis eu magna feugiat luctus. Nullam dictum faucibus felis eu
aliquam. Pellentesque ante dui, accumsan vel molestie id, vestibulum
eget velit. Pellentesque id metus lectus. Aenean posuere fringilla
malesuada.

<br /><br />Praesent faucibus risus sit amet tincidunt fermentum. Ut vel
maximus lacus. Proin sodales dolor ut interdum luctus. Maecenas mollis
est quis tellus scelerisque, vel finibus diam aliquet. Aliquam erat
volutpat. Curabitur id fringilla nibh, id efficitur eros. Suspendisse
quis rhoncus arcu. Vivamus pulvinar diam eget tellus pulvinar fringilla.
Nulla quis nulla nisl. Aliquam lacus mauris, accumsan sed ornare vel,
finibus id diam. Morbi ac ligula quam. Morbi rutrum, purus sit amet
lobortis mollis, ex lorem placerat tortor, ornare malesuada erat ante
sollicitudin nisl. Donec turpis massa, iaculis vitae quam vel, tempor
vehicula lorem. Morbi nec neque magna.
</p>`;

// Constants
const SECTIONS_LIST = [
  "introduction",
  "method",
  "findings",
  "qualitative-analysis",
  "conclusion",
];
const IS_DARK_MODE_KEY = "isDarkMode";
const DEFAULT_IS_DARK_MODE = "no";
const FONT_SIZE_KEY = "16";
const DEFAULT_FONT_SIZE = 16;
const MAX_FONT_SIZE = 32;
const MIN_FONT_SIZE = 12;

document.addEventListener("DOMContentLoaded", () => {
  // States
  let isDarkMode =
    window.localStorage.getItem(IS_DARK_MODE_KEY) ?? DEFAULT_IS_DARK_MODE;
  let fontSize = window.localStorage.getItem(FONT_SIZE_KEY);
  fontSize = fontSize == null ? DEFAULT_FONT_SIZE : fontSize;

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
      $("span#theme-switch-icon").text("dark_mode");
      $("body").removeClass("theme-dark").addClass("theme-light");
      $("nav, section#top-container")
        .removeClass("space-blue-bg-dark")
        .addClass("space-blue-bg");
      $("button#floating-up-button")
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

  const isTopOfPage = () => {
    return $(document).scrollTop() <= 300;
  };

  const doesFloatingUpButtonExist = () => {
    return document.getElementById("floating-up-button") != null;
  };

  const getBackgroundColor = () =>
    isDarkMode === "yes" ? "space-blue-bg-dark" : "space-blue-bg";

  const createFloatingUpButton = () => {
    const upButton = $(
      `<button class="${getBackgroundColor()}" id="floating-up-button"><span class="material-symbols-outlined">arrow_upward</span></button>`
    );
    upButton.click(scrollToTop);
    return upButton;
  };

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

  // Main
  displayTheme();
  $("#theme-switch").click(toggleTheme);

  // Add data to each section
  SECTIONS_LIST.forEach((section) => {
    $(`section#${section}`).append(MOCK_DATA);
  });

  // Set Font Size
  $("p").css("font-size", `${fontSize}px`);

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
