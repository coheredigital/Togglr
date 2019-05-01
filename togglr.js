$.fn.togglr = function(passedOptions) {
	var $elements = $(this);
	
    $elements.each(function() {
        var $this = $(this);

        var targetElements = $this.data("togglr-target");
        var toggleClasses = $this.data("togglr-class");

        

        if (!targetElements || !toggleClasses) {
            return;
        }

        

        var elementList = targetElements.split(",");
        var classes = toggleClasses.split(",");
        var defintionList = [];

        if (elementList.length == 0) {
            return;
        }

        elementList.forEach(function (element, i) {
            defintionList.push({
                key: element,
                class: classes[i]
            })
        });

        $this.on("click", function(event) {
            console.table(defintionList);
            defintionList.forEach(function(item){
                $(item.key).toggleClass(item.class);
            });

            if ($this.data("togglr-prevent-default")) {
                event.preventDefault();
            }
        });
    });

};