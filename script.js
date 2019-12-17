var pswdLength;

var getLength = function () {
    pswdLength = prompt("Enter length of your password - must be between 8 and 128 characters");
    if (pswdLength < 8 || pswdLength > 128) {
        alert("It looks like your password length is incorrect. Please try again.");
        getLength();
    }
}
getLength();

var special;
var number;
var lowercase;
var capital;

var getCharType = function () {
    special = confirm("Do you want your password contains Special characters?");
    number = confirm("Do you want your password contains Numeric characters?");
    lowercase = confirm("Do you want your password contains Lower case characters?");
    capital = confirm("Do you want your password contains Upper case characters?");

    if (special === false && number === false && lowercase === false && capital === false) {
        alert("It looks like you didn't choose ane of character type. Please try again.");
        getCharType();
    };
}
getCharType();

var allNumbers = "0123456789";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var wholeCharSet;
if (special === true) {
    wholeCharSet += specChar;
}
if (number === true) {
    wholeCharSet += allNumbers;
}
if (lowercase === true) {
    wholeCharSet += lowerCaseLetters;
}
if (capital === true) {
    wholeCharSet += upperCaseLetters;
}

function generatePswd() {
    var textArea = document.getElementById('password');
    var myPassword = "";
    for (var i = 0; i < pswdLength; i++) {
        myPassword += wholeCharSet[Math.floor(Math.random() * wholeCharSet.length)];
    }
    console.log("Your password is: " + myPassword);
    textArea.textContent = myPassword;
};

function copyText() {
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
};