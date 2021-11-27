document.getElementById("cookie").onclick = cookieClicked;

var money = 0;

function cookieClicked() {
    document.getElementById("money").innerHTML = "$" + ++money;
}