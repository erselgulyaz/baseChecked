(function($){

	$.fn.baseChecked = function(options){

		var bcCounter = 0;
		
		var defaults = {
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
		};


		this.each(function(){
			var $base = $(this);
			
			options = $.extend({},defaults,options);

			$base.css({
				"position" : "absolute",
				"left" : 0,
				"top" : 0,
				"width" : "1px",
				"height" : "1px",
				"opacity" : 0
			});
			$base.addClass(options.itemClass);
			$base.parent().addClass(options.wrapClass);
			$base.parent().prepend("<a href='javascript:;' class='"+ options.buttonClass +"'>"+ options.buttonText +"</a>");
			$base.parent().find("label").addClass(options.labelClass);
			
			if ($base.attr("checked")) {
				$base.parent().addClass("bc-selected");
			}

			if ($base.attr("disabled")) {
				$base.parent().addClass("bc-disabled");
			}

			if ($base.attr("type") == "checkbox") {
				$base.parent("." + options.wrapClass).addClass("bc-checkbox");

				$base.parent("." + options.wrapClass).not("." + options.disabledClass).find("." + options.buttonClass + " , ." + options.labelClass).on("click", function(){
					if ($(this).parent("." + options.wrapClass).find("." + options.itemClass).attr("checked")) {
						$(this).parent("." + options.wrapClass).find("." + options.itemClass).removeAttr("checked");
						$(this).parent().removeClass("bc-selected");
						options.unCheck.call(undefined,$(this).parent().find("." + options.itemClass).attr("name"));
					}else{
						$(this).parent("." + options.wrapClass).find("." + options.itemClass).attr("checked", true);
						$(this).parent().addClass("bc-selected");
						options.onCheck.call(undefined,$(this).parent().find("." + options.itemClass).attr("name"));
					}
				});


			}else if($base.attr("type") == "radio") {
				$base.parent("." + options.wrapClass).addClass("bc-radio");

				$base.parent("." + options.wrapClass).not("." + options.disabledClass).find("." + options.buttonClass + " , ." + options.labelClass).on("click", function(){
					$('input:radio[name="'+ $base.attr("name") +'"]').parent().removeClass("bc-selected");
					$('input:radio[name="'+ $base.attr("name") +'"]').removeAttr("checked");
					
					$(this).parent("." + options.wrapClass).find("." + options.itemClass).attr("checked", true);
					$(this).parent().addClass("bc-selected");
					options.onChange.call(undefined,$(this).parent().find("." + options.itemClass).attr("name"));
				});
			}
			
			
			bcCounter++;
			if ($.isFunction(options.onInit)) {
				if (bcCounter == 1) {
					options.onInit.call();
				}
			}

		});

		return this;
		
		$("." + options.wrapClass).hover(function(){
			$(this).addClass("bc-hover");
		},function(){
			$(this).removeClass("bc-hover");
		});
	};

})(jQuery);