var contact = {
    create: function() {
        // alert(0)
        var formData = {
            Name: $("#name").val(),
            Phone: $("#phone").val(),
            Email: $("#email").val(),
            Content: $("#content").val()
        }
        if (this.checkVal(formData)) {
            loadShade.show();
            $.method("POST", "/ContactUs/add", null, JSON.stringify(formData), null, null, function(a) {
                loadShade.hide();
                switch (a.Code) {
                    case 1:
                        layer.msg("操作成功");
                        window.location.href = window.location.href;
                        break;
                    default:
                        layer.msg("操作失败");
                }
            }, function(a) {})
        }
    },
    checkVal: function(data) {
        console.log(data)
        var invalid = false;
        if (data.Name == null || data.Name == "" || typeof(data.Name) == "undefined") {
            layer.msg('姓名不能为空');
            invalid = true;
            return;
        }
        if (data.Phone == null || data.Phone == "" || typeof(data.Phone) == "undefined") {
            layer.msg('联系电话不能为空');
            invalid = true;
            return;
        }
        if (data.Email == null || data.Email == "" || typeof(data.Email) == "undefined") {
            layer.msg('邮箱不能为空');
            invalid = true;
            return;
        }
        if (data.Content == null || data.Content == "" || typeof(data.Content) == "undefined") {
            layer.msg('留言内容不能为空');
            invalid = true;
            return;
        }

        if (invalid) { return false; }
        return true;
    }
}