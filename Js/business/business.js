;(function() {
    $("#business .tab").eq(1).addClass("on");
    $("#business .business-item").eq(1).addClass("on");
    $("#business .tab").click(function() {
        $("#business .tab").removeClass("on").eq($(this).index()).addClass("on");
        $("#business .business-item").removeClass("on").eq($(this).index()).addClass("on");
    })
}
)();