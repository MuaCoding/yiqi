;(function() {
    $("#property .tab").eq(2).addClass("on");
    $("#property .property-item").eq(2).addClass("on");
    $("#property .tab").click(function() {
        $("#property .tab").removeClass("on").eq($(this).index()).addClass("on");
        $("#property .property-item").removeClass("on").eq($(this).index()).addClass("on");
    })
}
)();