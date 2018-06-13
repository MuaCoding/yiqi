;(function() {
    $("#telecom .tab").eq(0).addClass("on");
    $("#telecom .telecom-item").eq(0).addClass("on");
    $("#telecom .tab").click(function() {
        $("#telecom .tab").removeClass("on").eq($(this).index()).addClass("on");
        $("#telecom .telecom-item").removeClass("on").eq($(this).index()).addClass("on");
    })
}
)();