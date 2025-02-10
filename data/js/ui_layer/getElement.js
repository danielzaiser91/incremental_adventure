import { q } from "../base_layer/helper.js";

export const getPopover = () => q('#popover');
export const getPopoverTitle = () => q('#popover h1');
export const getPopoverText1 = () => q('#popover h3:nth-of-type(1)');
export const getPopoverText2 = () => q('#popover h3:nth-of-type(2)');
export const getPopoverText3 = () => q('#popover h3:nth-of-type(3)');
export const getPopoverText4 = () => q('#popover h3:nth-of-type(4)');
export const getPopoverClose = () => q('#popover .close');

