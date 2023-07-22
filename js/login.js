function loginValidation() {

    let uname = document.getElementById('loginUsername').value;
    let pword = document.getElementById('loginPassword').value;
    let cashieruname = localStorage.getItem('cashierUname');
    let cashierpword = localStorage.getItem('cashierPword');
    
    if (uname === cashieruname && pword === cashierpword) {
        window.location.assign("pos.html");
        alert("You are now logged in as local!");
    } else if (uname == "cyril" && pword == "cyril") {
        window.location.assign("pos.html");
        alert("Welcome Cyril John!");
    } else if (uname === "haezel" && pword === "haezel") {
        window.location.assign("pos.html");
        alert("Welcome Cyril John!");
    } else if (uname == "" || pword == ""){
        alert("Please input Username or Password!");
    } else {
        alert("User not found. Please try again!");
    }
}

function addCashier() {

    let cashiername = document.getElementById('regFname').value;
    let cashieruname = document.getElementById('regUname').value;
    let cashierpword = document.getElementById('regPword').value;
    
    localStorage.setItem('cashierName', cashiername);
    localStorage.setItem('cashierUname', cashieruname);
    localStorage.setItem('cashierPword', cashierpword);

}

