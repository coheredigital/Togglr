// toggle buttons

// instersection observer class controlls
$.fn.togglr = function(passedOptions) {
	var $elements = $(this);
	
    $elements.each(function() {
        var $this = $(this);

        var targetElements = $this.data("toggle-target");
        var toggleClasses = $this.data("toggle-class");

        var elementList = targetElements.split(",");
        var classes = toggleClasses.split(",");
        

        var defintionList = [];
        elementList.forEach(function (element, i) {
            defintionList.push({
                key: element,
                class: classes[i]
            })
        });

        $this.on("click", function(event) {
            
            defintionList.forEach(function(item){
                $(item.key).toggleClass(item.class);
            });

            if ($this.data("toggle-prevent-default")) {
                event.preventDefault();
            }
        });
    });

};