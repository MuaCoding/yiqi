(function() {
    activeNav(0);
    (function() {
        var a = new Swiper(".banner-swiper",{
            navigation: {
                nextEl: '.control-right',
                prevEl: '.control-left',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        
        var b = new Swiper(".tab-gov.swiper-container",{
            pagination: ".tab-gov .pagination",
            onSwiperCreated: function(a) {
                $("img.lazy").lazy()
            },
            noSwiping: !0,
            noSwipingClass: "stop-swiping"
        });
        $(".tab-gov .control-item.control-left").click(function() {
            b.swipePrev()
        });
        $(".tab-gov .control-item.control-right").click(function() {
            b.swipeNext()
        });
        var c = new Swiper(".tab-etp.swiper-container",{
            pagination: ".tab-etp .pagination",
            onSwiperCreated: function(a) {
                $("img.lazy").lazy()
            },
            noSwiping: !0,
            noSwipingClass: "stop-swiping"
        });
        $(".tab-etp .control-item.control-left").click(function() {
            c.swipePrev()
        });
        $(".tab-etp .control-item.control-right").click(function() {
            c.swipeNext()
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


(function(){
    (function(){
        var swiper = new Swiper(".slide-swiper",{
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        });
    })();
})()