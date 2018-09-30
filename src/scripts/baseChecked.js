let baseChecked = {
  defaults: {
    mainEl: '.bc-item',
    wrapperEl: '.bc-wrapper',
    infoEl: '.bc-label',
    activeClass: 'bc-selected',
    disabledEl: 'bc-disabled',
    animationName: '',
    buttonClass: 'bc-button',
    buttonText: ''
  },
  init(options) {
    const resultEl = baseChecked.extend(baseChecked.defaults, options),
          items = document.querySelectorAll(resultEl.wrapperEl);

    let itemFormEl, itemButtonEl, itemName, itemType, itemAnimation;
    
    baseChecked.clickAction(resultEl);
    
    Array.prototype.forEach.call(items, (item) => {
      /* element selectors */
      itemFormEl = item.querySelector(resultEl.mainEl);
      itemName = itemFormEl.getAttribute('name');
      itemType = itemFormEl.getAttribute('type');
      itemAnimation = resultEl.animationName;

      /* added data attribute from wrapper  */
      item.setAttribute('data-bc-name' , itemName);
      item.setAttribute('data-bc-type' , itemType);
      resultEl.animationName.length > 0 && item.setAttribute('data-bc-animation' , itemAnimation);

      /* button created */
      itemButtonEl = document.createElement('span');
      itemButtonEl.classList.add(resultEl.buttonClass);
      itemButtonEl.innerHTML = resultEl.buttonText;
      item.appendChild(itemButtonEl);

      if ( item.querySelector(resultEl.mainEl).getAttribute("checked") !== null ) {
        item.classList.add(resultEl.activeClass);
      }

      baseChecked.elementStyles(itemFormEl);

    });

  },
  elementStyles(itemFormEl) { /* form element styles */
    itemFormEl.style.opacity = 0;
    itemFormEl.style.visibility = "hidden";
    itemFormEl.style.position = "absolute";
    itemFormEl.style.left = 0;
    itemFormEl.style.top = 0;
  },
  clickAction(resultEl) { /* click events for form elements */

    const clickElements = document.querySelectorAll(resultEl.wrapperEl);
    let innerSelectors, itemFormEl, itemType, itemName, oldSelectedItem;

    Array.prototype.forEach.call(clickElements, item => {
      innerSelectors = item.querySelectorAll(`${resultEl.infoEl},.${resultEl.buttonClass}`);
      Array.prototype.forEach.call(innerSelectors,(innerSelector) => {
        innerSelector.addEventListener('click', () => {
          itemType = innerSelector.parentNode.querySelector(resultEl.mainEl).getAttribute('type');
          itemName = item.dataset.bcName;
          itemFormEl = item.querySelector(resultEl.mainEl);
          if ( !item.classList.contains(resultEl.disabledEl) ) {
            if ( itemType === "radio" && !item.classList.contains(resultEl.activeClass) ) { /* radio buttons click action */
              oldSelectedItem = document.querySelector(`${resultEl.wrapperEl}.${resultEl.activeClass}[data-bc-name='${itemName}']`);
              oldSelectedItem !== null && oldSelectedItem.classList.remove(`${resultEl.activeClass}`);
              itemFormEl.click();
              item.classList.add(resultEl.activeClass);
            } else if ( itemType === "checkbox" ) { /* checkboxes click action */
              item.classList.toggle(resultEl.activeClass);
              item.querySelector(resultEl.mainEl).click();
            }
          }
        });
      });
    });
  },
  extend(defaults, options) {
      let extendedItems = {}, prop;
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
  },
  
};

const closestSelector = () => { /* ie9+ closest polyfill */
    if (!Element.prototype.matches)
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    
    if (!Element.prototype.closest)
        Element.prototype.closest = function(s) {
            let el = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1); 
            return null;
    };
}

window.addEventListener('load', () => {
  closestSelector();
  baseChecked.init({
    animationName: 'noMoreBorder'
  });
});