(function() {
    activeNav(0);
    (function() {
        var a = new Swiper(".banner-swiper",{
            autoplay: 3E3,
            loop : true,
            navigation: {
                nextEl: '.control-right',
                prevEl: '.control-left',
            },
            pagination: ".banner-swiper .swiper-pagination",

        });
        $(".banner-box .control-item.control-left").click(function() {
            a.slidePrev()
        });
        $(".banner-box .control-item.control-right").click(function() {
            a.slideNext()
        });

        var d = new Swiper(".tab-social.swiper-container",{
            pagination: ".tab-social .pagination",
            onSwiperCreated: function(a) {
                $("img.lazy").lazy()
            },
            noSwiping: !0,
            noSwipingClass: "stop-swiping"
        });
        $(".tab-social .control-item.control-left").click(function() {
            d.swipePrev()
        });
        $(".tab-social .control-item.control-right").click(function() {
            d.swipeNext()
        })
    }
    )();
    (function() {
        $(".cooperater-units .tab-bar-item").eq(0).addClass("active");
        $(".cooperater-units .tab-item").eq(0).addClass("active");
        $(".cooperater-units .tab-bar-item").click(function() {
            $(".cooperater-units .tab-bar-item").removeClass("active").eq($(this).index()).addClass("active");
            $(".cooperater-units .tab-item").removeClass("active").eq($(this).index()).addClass("active")
        })
    }
    )();
}
)();


$(document).ready(function() {
    var owl = $("#owl-demo");
    owl.owlCarousel({
 
        autoPlay: 4000, 
        items: 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [600,2],
        itemsMobile: [479,2],
        pagination: false,
        responsiveRefreshRate: 200

    });

    $("slide-box .control-right").click(function(){
        owl.trigger('owl.next');
    });
    $("slide-box .control-left").click(function(){
        owl.trigger('owl.prev');
    });
 
});
