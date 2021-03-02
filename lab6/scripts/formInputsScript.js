const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.getElementById("full-name").innerHTML = urlParams.get("fullName");
document.getElementById("group").innerHTML = urlParams.get("group");
document.getElementById("variant").innerHTML = urlParams.get("variant");
document.getElementById("phone").innerHTML = urlParams.get("phone");
document.getElementById("email").innerHTML = urlParams.get("email");
