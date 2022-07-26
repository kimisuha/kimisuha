$(document).ready(function () {
    $("#forgot-form").click(function (e) {
        $("#forgot-form").validate({
            rules: {
                password: {
                    required: true,
                    minlength: 2
                },
                confirm: {
                    required: true,
                    minlength: 2,
                    equalTo: "#password"
                }
            },
            messages: {
                password: {
                    required: "please provide password",
                    minlength: "please enter valid password"
                },
                confirm: {
                    required: "please provide confirm password",
                    minlength: "at least 2 character",
                    equalTo: "not correct"
                }
            },
            submitHandle: function (form) {
                form.submit();
            }
        });

    });
});
