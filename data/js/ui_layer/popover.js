import {
  getPopover,
  getPopoverTitle,
  getPopoverText1,
  getPopoverText2,
  getPopoverText3,
  getPopoverText4,
} from "./getElement.js";
import { hideElOrFillText } from "../base_layer/index.js";

export function popover({ title, text1, text2, text3, text4, actions }) {
  hideElOrFillText(getPopoverTitle(), title);
  hideElOrFillText(getPopoverText1(), text1);
  hideElOrFillText(getPopoverText2(), text2);
  hideElOrFillText(getPopoverText3(), text3);
  hideElOrFillText(getPopoverText4(), text4);
  createActions(actions);

  showPopover();
}

export function showPopover() {
  getPopover().classList.remove("hide");
}

export function hidePopover() {
  getPopover().classList.add("hide");
}
