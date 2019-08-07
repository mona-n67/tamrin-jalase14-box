$(document).ready(function() {

    $('.btn').click(function() {

        var selector = '.' + $(this).attr('data-effect');
        // $(selector).show();
        console.log(selector);

        if (selector == ".All") {
            $('.box').show(700);
        } 

        else {
            $('.box').hide(700);
            $(selector).show(700);

        }
    });
});
// End