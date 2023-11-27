function auth() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //condition

    if(user == "admin" && password == 123456) {
        window.location.assign('list.html')
        alert("Nice")
    }
    else{
        alert("Wrong Username or Password")
    }
}

setTimeout(() => {
    window.location.assign('index.html')
    alert("Session timeout")
}, 300000);

function loginAgain() {
    window.location.assign('index.html');
};