

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";

    var checkMeOut;

    checkMeOut = document.getElementById("checkMeOut");

    /*
    checkMeOut.addEventListener("click", function(){
        console.log("checkMeOut is clicked.");
    });
    */

    checkMeOut.addEventListener("change", function() {
        /*
        if (checkMeOut.checked) {
            console.log("It's checked.");
        } else {
            console.log("It's unchecked.");
        }
        */

        (checkMeOut.checked) ? console.log("It's checked.") : console.log("It's unchecked.") ;
    });

})();

