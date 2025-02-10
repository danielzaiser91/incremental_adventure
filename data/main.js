import { init_ui_listeners, init_player, init_chapter_0 } from "./js/index.js";

document.addEventListener('DOMContentLoaded', () => {
  init_ui_listeners();
  init_player();

  // future update:
  // init_main_menu_screen();
  init_chapter_0();
});
