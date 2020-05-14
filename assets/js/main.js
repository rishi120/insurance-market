'use strict';
$(function() {
    // code goes here
    /*tooltip initialization */
    $('[data-toggle="tooltip"]').tooltip();
    /* sal js initialization */
    sal({
        threshold: 0.1,
        once: true,
    });
});