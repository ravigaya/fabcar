// Name and Password from the register-form
var username = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from registerform
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
}

//if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value === storedName || userPw.value === storedPw) {
        
        window.open('cars.html');
    }else {
        alert('ERROR');
    }
}

