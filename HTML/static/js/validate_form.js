$('#login').validate({
    rules:{
        userName:"required",
        password:"required"
    },
    messages:{
        userName:"Please enter user name",
        password:"Please enter your password"
    }
});
$('#forgotPassword').validate({
    rules:{
        emailForgotPassword:"required"
    },
    messages:{
        emailForgotPassword:"Please enter your email"
    }
});
$('#resetPassword').validate({
    rules:{
        resetPasswordInput:"required",
        retypePassword: "required"
    },
    messages:{
        resetPasswordInput:"Please enter your password",
        retypePassword: "Please enter your retype password"
    }
});