// 响应式
$(window).resize(function() // 绑定到窗口的这个事件中
{	
    var whdef = 120 / 1920;
    // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;
    // 当前窗口的高度
    var wW = window.innerWidth;
    // 当前窗口的宽度
    var rem = wW * whdef;
    // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
});

// 轮播切换
function activeNav(a) {
    $(".site-nav \x3e ul \x3e li").eq(a).addClass("active")
};
// 菜单栏显示隐藏
$('.menu-btn').click(function(){
    $('.open').toggleClass('open-nav');
    $('.pop-bg').toggleClass('show');
});
$(function(){
    $('.pop-bg').click(function(){
        if($('.open').hasClass('open-nav')){
            $('.open').removeClass('open-nav');
            $('.pop-bg').removeClass('show');
        }
    });
});


(function(){
    jQuery(".slide-box").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3});
    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,trigger:"click"});
})();