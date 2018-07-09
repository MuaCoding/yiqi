

var contact = {
    create: function() {
    	var formData = {
    		Name: $("#name").val(),
    		Phone: $("#phone").val(),
    		Email: $("#email").val(),
    		Content: $("#content").val()
    	}
        if (checkVal(formData)) {
        	
        }
    },
    checkVal: function(data) {
        var invalid = false;
        if (data.Name == null || data.Name == "" || typeof(data.Name) == "undefined") {
        	layer.msg('姓名不能为空');
            invalid = true;
        }
        if (data.Phone == null || data.Phone == "" || typeof(data.Phone) == "undefined") {
        	layer.msg('联系电话不能为空');
            invalid = true;
        }
        if (data.Email == null || data.Email == "" || typeof(data.Email) == "undefined") {
        	layer.msg('邮箱不能为空');
            invalid = true;
        }
        if (data.Content == null || data.Content == "" || typeof(data.Content) == "undefined") {
        	layer.msg('留言内容不能为空');
            invalid = true;
        }

        if (invalid) { return false; }
        return true;
    }
}