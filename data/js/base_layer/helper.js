const default_el = create('div');
const log_array = [];

/**
 * 
 * @param {string} logMsg 
 * @param {string} method_name 
 */
export function log(logMsg, method_name) {
  const msg = method_name + ': ' + logMsg;
  console.log(msg);
  log_array.push(msg);
}

/**
 * 
 * @param {string} errorMsg 
 * @param {string} method_name 
 */
export function error(errorMsg, method_name) {
  const msg = method_name + ': ' + errorMsg;
  console.error(msg);
  log_array.push(msg);
}

/**
 * 
 * @param {string} queryString 
 * @returns {HTMLElement}
 */
export function q(queryString) {
  const el = document.querySelector(queryString);
  if (!el) {
    error('query returns null for "'+queryString+'"');
    return default_el;
  }
  
  return document.querySelector(queryString);
};

/**
 * 
 * @param {string} queryString 
 * @returns {HTMLElement}
 */
export function qAll(queryString) {
  const el = document.querySelectorAll(queryString);
  if (!el?.length) {
    error('query returns null for "'+queryString+'"');
    return default_el;
  }
  
  return document.querySelector(queryString);
};

/**
 * 
 * @param {HTMLElement} el 
 * @param {string} text 
 * @returns {void}
 */
export function hideElOrFillText(el, text) {
  if (!el) return error('no Element', 'hideElOrFillText');
  if(!text) el.classList.add('hide');
  el.innerText = text;
}

/**
 * 
 * @param {string[]} options 
 */
export function createDropdownListWithOptions(options) {
  /** @type {HTMLOptionElement} */
  const list = undefined;
  const selectEl = create('select');
  const optionElements = options.map((label, index) => {
    const option = create('option', { value: index, textContent: label });
    selectEl.appendChild(option);
  });

  return selectEl;
}

/** @returns {HTMLElement} */
export function create(type, attributes = {}, options = {}) {
  const el = document.createElement(type, options);
  for (const [attrName, value] of Object.entries(attributes)) {
    if (["className", "textContent"].includes(attrName)) {
      // for some reason this will not be added to the element with setAttribute correctly
      el[attrName] = value;
    } else {
      el.setAttribute(attrName, value);
    }
  }
  return el;
}
