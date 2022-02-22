$(document).ready(function() {  
    var userLang = navigator.language || navigator.userLanguage;

    var options = $.extend({}, // empty object    
    $.datepicker.regional[userLang], {  
        dateFormat: "mm/dd/yy"  
    } // your custom options    
    );  

    $("#cleander-in").datepicker(options);  
    $("#cleander-out").datepicker(options);
});