;(function() {
    $("#culture .tab").eq(1).addClass("on");
    $("#culture .culture-item").eq(1).addClass("on");
    $("#culture .tab").click(function() {
        $("#culture .tab").removeClass("on").eq($(this).index()).addClass("on");
        $("#culture .culture-item").removeClass("on").eq($(this).index()).addClass("on");
    })
}
)();