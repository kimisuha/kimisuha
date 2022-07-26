$(document).ready(function () {
    $("#sign-in-form").on("click", function () {
        $("#sign-in-form").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 5,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                username: {
                    required: "please provide username",
                    minlength: "your username at least 2 character"
                },
                email: {
                    required: "please enter provide email",
                    minlength: "please enter valid email",
                    email: "please enter valid email"
                },
                password: {
                    required: "please provide password",
                    minlength: "please enter valid password"
                }
            },
            submitHandle: function (form) {
                form.submit();
                window.location = "http://127.0.0.1:5500/Html/Dashboard.html"
            }
        });
    });
});