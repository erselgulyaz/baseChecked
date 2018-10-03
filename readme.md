
baseChecked is a simple and lightweight plugin. Prepared for checkbox and radiobuttons. All css and javascript properties are editable.

## Properties
* Using pure javascript and ES6 standarts
* All style and js values customizable
* change, check, uncheck callbacks

## Installation
Download plugin files then include from page. For example: 
```html
<link rel="stylesheet" href="/dist/baseChecked.min.css" />
<script type="text/javascript" src="/dist/baseChecked.min.js"></script>
```

## Basic Usage

```html
baseChecked.init();
```

```html
<div  class="bc-wrapper">
	<span  class="bc-label">RadioButton Sample!</span>
	<input  type="radio"  name="radioSample"  class="bc-item"  />
</div>
<div  class="bc-wrapper">
	<span  class="bc-label">Checkbox Sample!</span>
	<input  type="checkbox"  name="checkboxSample"  class="bc-item"  />
</div>
```




## Using All Parameters
```html
baseChecked.init({
	mainEl:  '.bc-item',
	wrapperEl:  '.bc-wrapper',
	infoEl:  '.bc-label',
	activeClass:  'bc-selected',
	disabledEl:  'bc-disabled',
	animationName:  '',
	buttonClass:  'bc-button',
	buttonText:  '',
	onCheck: (item) => {/* checkbox checked callback */},
	unCheck: (item) => {/* checkbox unchecked callback */},
	onSelected: (item) => { /* radiobutton selected callback */}
});
```

## Parameters

<table>
	<tr>
      <td>Name</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>
      <strong>mainEl</strong>
      </td>
      <td>
      .bc-item
      </td>
      <td>
      <p>Form element class</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>wrapperEl</strong>
      </td>
      <td>
      .bc-wrapper
      </td>
      <td>
      <p>Wrapper for label and form element</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>infoEl</strong>
      </td>
      <td>
      .bc-label
      </td>
      <td>
      <p>Label class</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>activeClass</strong>
      </td>
      <td>
      bc-selected
      </td>
      <td>
      <p>When the element is selected by clicking the label or button, the given value is added to the wrapperEl.</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>disabledEl</strong>
      </td>
      <td>
      bc-disabled
      </td>
      <td>
      <p>If you are using "disabled" attributes your form elements, this class added selected element wrapperEl item. After initialization disabled item not working click and other actions.</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>animationName</strong>
      </td>
      <td>
      empty
      </td>
      <td>
      Boş bırakılabilir veya noMoreBorder, outToCenter özellikleri eklenebilir. Boş bırakıldığında animasyon çalışmaz. Diğer iki özellikte seçim ve seçimi kaldırma işlemlerinde animasyon çalışır.
      </td>
    </tr>
        <tr>
      <td>
      <strong>buttonClass</strong>
      </td>
      <td>
      bc-button
      </td>
      <td>
      When the plugin is init, the class of the button element inserted into the wrapperEl
      </td>
    </tr>
        <tr>
      <td>
      <strong>buttonText</strong>
      </td>
      <td>
      empty
      </td>
      <td>
      Checked button inner text or font-icon side. For example you are writing "hello", after initialization button "hello" append button side.
      </td>
    </tr>
</table>


## Callbacks
	 
<table>
	<tr>
    	<td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
    <td>
      <strong>onCheck</strong>
      </td>
      <td>
      empty
      </td>
      <td>
      <p>After checkbox checked actions</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>unCheck</strong>
      </td>
      <td>
      empty
      </td>
      <td>
      <p>After checkbox removed checked actions</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>onSelected</strong>
      </td>
      <td>
      empty
      </td>
      <td>
      <p>After radio button selected actions</p>
      </td>
    </tr>
</table>