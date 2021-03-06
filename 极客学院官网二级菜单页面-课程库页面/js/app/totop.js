define(['jquery'], function($) {

    return function(options) {
        var opt = {};

        opt.showPosition = options.showPosition || 0;
        opt.speed = options.speed || 0;

        var objTarget = options.target;

        if (opt.showPosition === 0) {
            objTarget.show();
        } else {
            objTarget.hide();
        }


        $(document).scroll(function() {
            if ($(document).scrollTop() >= opt.showPosition) {
                objTarget.show();
            } else {
                objTarget.hide();
            }
        });

        objTarget.on('click',function(){
            if(opt.speed===0){
            	$('body,html').scrollTop(0);
            }else{
            	$('body,html').animate({scrollTop:0}, opt.speed);
            }
        });
    };

});
