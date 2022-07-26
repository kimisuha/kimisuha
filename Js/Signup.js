$(document).ready(function () {
    $("#signup-form").click(function (e) {
        $("#signup-form").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 2,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 2,
                },
                confirm: {
                    required: true,
                    minlength: 2,
                    equalTo: "#password"
                }
            },
            messages: {
                username: {
                    required: "please provide user name",
                    minlength: "too short, more than!"
                },
                email: {
                    required: "please provide email",
                    minlength: "too short, more than",
                    email: "email incorrect"
                },
                password: {
                    required: "please provide password",
                    minlength: "too short, more than"
                },
                confirm: {
                    required: "please provide confirm password",
                    minlength: "too short",
                    equalTo: "not correct!"
                }
            },
            handlerSubmit: function (form) {
                form.submit();
            }
        });

    });
});