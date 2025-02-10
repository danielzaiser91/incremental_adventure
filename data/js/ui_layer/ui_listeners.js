import { getPopoverClose } from "./getElement.js";
import { hidePopover } from "./popover.js";

export function init_ui_listeners() {
  getPopoverClose().addEventListener('click', () => hidePopover());
}
