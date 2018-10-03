'use strict';

var baseChecked = {
  defaults: {
    mainEl: '.bc-item',
    wrapperEl: '.bc-wrapper',
    infoEl: '.bc-label',
    activeClass: 'bc-selected',
    disabledEl: 'bc-disabled',
    animationName: '',
    buttonClass: 'bc-button',
    buttonText: '',
    onCheck: function onCheck(item) {/* checkbox checked callback */},
    unCheck: function unCheck(item) {/* checkbox unchecked callback */},
    onSelected: function onSelected(item) {/* radiobutton selected callback */}
  },
  init: function init(options) {
    var resultEl = baseChecked.extend(baseChecked.defaults, options),
        items = document.querySelectorAll(resultEl.wrapperEl);

    var itemFormEl = void 0,
        itemButtonEl = void 0,
        itemName = void 0,
        itemType = void 0,
        itemAnimation = void 0;

    Array.prototype.forEach.call(items, function (item) {
      /* element selectors */
      itemFormEl = item.querySelector(resultEl.mainEl);
      itemName = itemFormEl.getAttribute('name');
      itemType = itemFormEl.getAttribute('type');
      itemAnimation = resultEl.animationName;

      /* added data attribute from wrapper  */
      item.setAttribute('data-bc-name', itemName);
      item.setAttribute('data-bc-type', itemType);
      resultEl.animationName.length > 0 && item.setAttribute('data-bc-animation', itemAnimation);

      /* button created */
      itemButtonEl = document.createElement('span');
      itemButtonEl.classList.add(resultEl.buttonClass);
      itemButtonEl.innerHTML = resultEl.buttonText;
      item.appendChild(itemButtonEl);

      if (item.querySelector(resultEl.mainEl).getAttribute("checked") !== null) {
        item.classList.add(resultEl.activeClass);
      }

      baseChecked.elementStyles(itemFormEl);
    });

    baseChecked.clickAction(resultEl);
  },
  elementStyles: function elementStyles(itemFormEl) {
    /* form element styles */
    itemFormEl.style.opacity = 0;
    itemFormEl.style.visibility = "hidden";
    itemFormEl.style.position = "absolute";
    itemFormEl.style.left = 0;
    itemFormEl.style.top = 0;
  },
  clickAction: function clickAction(resultEl) {
    /* click events for form elements */

    var clickElements = document.querySelectorAll(resultEl.wrapperEl);
    var innerSelectors = void 0,
        itemFormEl = void 0,
        itemType = void 0,
        itemName = void 0,
        oldSelectedItem = void 0;

    Array.prototype.forEach.call(clickElements, function (item) {
      innerSelectors = item.querySelectorAll(resultEl.infoEl + ',.' + resultEl.buttonClass);
      Array.prototype.forEach.call(innerSelectors, function (innerSelector) {
        innerSelector.addEventListener('click', function () {
          itemType = innerSelector.parentNode.querySelector(resultEl.mainEl).getAttribute('type');
          itemName = item.dataset.bcName;
          itemFormEl = item.querySelector(resultEl.mainEl);
          if (!item.classList.contains(resultEl.disabledEl)) {
            if (itemType === "radio" && !item.classList.contains(resultEl.activeClass)) {
              /* radio buttons click action */
              oldSelectedItem = document.querySelector(resultEl.wrapperEl + '.' + resultEl.activeClass + '[data-bc-name=\'' + itemName + '\']');
              oldSelectedItem !== null && oldSelectedItem.classList.remove('' + resultEl.activeClass);
              itemFormEl.click();
              item.classList.add(resultEl.activeClass);
              resultEl.onSelected.call(undefined, innerSelector.closest(resultEl.wrapperEl));
            } else if (itemType === "checkbox") {
              /* checkboxes click action */
              item.classList.toggle(resultEl.activeClass);
              item.querySelector(resultEl.mainEl).click();
              item.classList.contains(resultEl.activeClass) ? resultEl.onCheck.call(undefined, innerSelector.closest(resultEl.wrapperEl)) : resultEl.unCheck.call(undefined, innerSelector.closest(resultEl.wrapperEl));
            }
          }
        });
      });
    });
  },
  extend: function extend(defaults, options) {
    var extendedItems = {},
        prop = void 0;
    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extendedItems[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extendedItems[prop] = options[prop];
      }
    }
    return extendedItems;
  }
};

var closestSelector = function closestSelector() {
  /* ie9+ closest polyfill */
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  if (!Element.prototype.closest) Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
};

window.addEventListener('load', function () {
  closestSelector();
});