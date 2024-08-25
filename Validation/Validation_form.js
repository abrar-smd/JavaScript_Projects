function validation() {
    var name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var Confirm_message = document.getElementById('confirm_password').value;

    check_name(name);
    check_email(Email);
    check_password(password);
    check_confirm_password(password, Confirm_message);
}
function check_name(name) {
    if (name.length > 7) {
        document.getElementById('name').classList.add('success');
        document.getElementById('name').classList.replace('error', 'success');
        document.getElementById('UserName_error').innerHTML = "";
    }
    else {
        document.getElementById('name').classList.add('error');
        document.getElementById('UserName_error').innerHTML = "Username must be 8 characters long";
    }
}
function check_email(Email) {
    if (Email.includes("@") && Email.includes(".")) {

        var atPosition = Email.indexOf("@");
        var dotPosition = Email.lastIndexOf(".");
        
        if (atPosition < dotPosition && dotPosition < Email.length - 1) {
            document.getElementById('email').classList.add('success');
            document.getElementById('email').classList.replace('error','success');
            document.getElementById('Email_error').innerHTML = "";
        } else {
            document.getElementById('email').classList.add('error');
            document.getElementById('Email_error').innerHTML = "Please enter a valid email";
        }
    } else {
        document.getElementById('email').classList.add('error');
        document.getElementById('Email_error').innerHTML = "Please enter a valid email";
    }
}
check_password = (password) => {
    if (password.length > 7 && password.includes(".")) {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('Password_error').innerHTML = "";
    }
    else {
        document.getElementById('password').classList.add('error');
        document.getElementById('Password_error').innerHTML = "Password must be 8 characters long and contain .";
    }
}
check_confirm_password = (password, Confirm_message) => {
    if (password === Confirm_message &&password!="") {
        document.getElementById('confirm_password').classList.add('success');
        document.getElementById('confirm_password').classList.replace('error', 'success');
        document.getElementById('Confirm_error').innerHTML = "";
    }
    else {
        document.getElementById('confirm_password').classList.add('error');
        document.getElementById('Confirm_error').innerHTML = "Password does not match";
    }
}