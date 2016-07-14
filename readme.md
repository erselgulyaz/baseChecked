#baseChecked is here!

This plugin has changed default checkbox and radio buttons.

## Properties
* all class values customizable
* init, change, check, uncheck callbacks

## Installation
Download plugin files then include jquery library and plugin files. For example: 

<link rel="stylesheet" href="assets/stylesheets/css/basechecked.css" />
<script type="text/javascript" src="jquery-library-path"></script>
<script type="text/javascript" src="assets/js/basechecked.js"></script>

## Basic Usage

```html
$(".for-example").baseChecked();
```

```html
<div class="myWrap">
	<input type="radio" name="example2" class="for-example" checked />
	<label>Content is here!</label>
</div>
```




## Using All Parameters

$(".for-example").baseChecked({
	itemClass : "bc-selector",
	wrapClass : "bc-wrapper",
	buttonClass : "bc-button",
	labelClass : "bc-label",
	disabledClass : "bc-disabled",
	buttonText: "",
	onInit: function() {
		// first time plugin initialized
	},
	onChange: function(itemName) {
		// radio button change function
	},
	onCheck: function(itemName) {
		// checkbox check function
	},
	unCheck: function(itemName) {
		// checkbox uncheck function
	}
});

## Parameters
	<table>
		<tbody>
		<tr>
			<td>Name</td>
			<td>Default</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>
				<strong>itemClass</strong>
			</td>
			<td>
				bc-selector
			</td>
			<td>
				<p>Selected radio or checkbox item added this class</p>
			</td>
		</tr>
		<tr>
			<td>
				<strong>wrapClass</strong>
			</td>
			<td>
				bc-wrapper
			</td>
			<td>
				<p>Selected item wrapped element class attributes</p>
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
				<p>Customizabled element class for check button</p>
			</td>
		</tr>
		<tr>
			<td>
				<strong>labelClass</strong>
			</td>
			<td>
				bc-label
			</td>
			<td>
				<p>Customizabled element class for text side (This element can learn to read the data from the labelData feature).</p>
			</td>
		</tr>
		<tr>
			<td>
				<strong>disabledClass</strong>
			</td>
			<td>
				bc-disabled
			</td>
			<td>
				<p>If you are using "disabled" attributes your form elements, this class added selected element parent item. After initialization disabled item not working click and other actions.</p>
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
		</tbody>
	</table>

## Callbacks
	All callbacks(except for onInit()) selected "itemName" parameters. itemName is form element name attributes. 
	<table>
		<tbody>
		<tr>
			<td>Name</td>
			<td>Default</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>
				<strong>onInit</strong>
			</td>
			<td>
				empty
			</td>
			<td>
				<p>First time plugin initialization callbacks.</p>
			</td>
		</tr>
		<tr>
			<td>
				<strong>onChange</strong>
			</td>
			<td>
				empty
			</td>
			<td>
				<p>After radio button change callbacks</p>
			</td>
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
				<p>After checkbox unchecked actions</p>
			</td>
		</tr>
		</tbody>
	</table>

