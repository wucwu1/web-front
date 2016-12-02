define(['jquery'], function($) {


    return function(option) {
        var opt = {};
        opt.parent = option.parent ? option.parent : $('body');
        var radio = opt.parent.find('label');

        radio.each(function(index, element) {
            $(this).on('click', function(e) {
                option.class.forEach(function(element, index) {
                    option.target.removeClass(element);
                });
                option.target.addClass(option.class[index]);
            });
        });
    };
});
