define(['jquery'], function($) {

    return function(options) {
        var opt = {};
        opt.perPageNum = options.perPageNum || 10;
        opt.showPage = options.showPage || 3;

        if (opt.showPage > 7) opt.showPage = 7;

        var sp = $('#split-page');

        sp.append('<div data-sp="tohome"><a href="#">首页</a></div>');
        sp.append('<div data-sp="prepage"><a href="#">上一页</a></div>');

        sp.append('<div data-sp="nextpage"><a href="#">下一页</a></div>');
        sp.append('<div data-sp="toend"><a href="#">末页</a></div>');
        sp.append('<div data-sp="total">共<span>' + parseInt(options.totalNum / opt.perPageNum) + '</span>页</div>');
        sp.append('<div data-sp="direct">当前<input type="text">页<button>确定</button></div>');

        var lists = $('<ul></ul>');
        lists.attr('data-sp', 'page');
        for (var i = 1; i <= opt.showPage; i++) {
            lists.append('<li><a href="#">' + i + '</a><li>');
        }

        lists.append('<li>...</li>');

        sp.find('[data-sp="prepage"]').after(lists);
    };

});
