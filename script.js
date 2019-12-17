var pswdLength;

var getLength = function () {
    pswdLength = prompt("Enter length of your password - must be between 8 and 128 characters");
    if (pswdLength < 8 || pswdLength > 128) {
        alert("It looks like your password length is incorrect. Please try again.");
        getLength();
    }
    console.log(pswdLength);
}

var special;
var number;
var lowercase;
var capital;

var getCharType = function () {
    getLength();
    special = confirm("Do you want your password contains Special characters?");
    number = confirm("Do you want your password contains Numeric characters?");
    lowercase = confirm("Do you want your password contains Lower case characters?");
    capital = confirm("Do you want your password contains Upper case characters?");

    if (special === false && number === false && lowercase === false && capital === false) {
        alert("It looks like you didn't choose ane of character type. Please try again.");
        getCharType();
    };
    console.log(special, number, lowercase, capital);

}
getCharType();


var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specCharArr = [];
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
for (let i = 0; i < specChar.length; i++) {
    specCharArr.push(specChar[i]);
}

var wholePassword = [];
if (special === true) {
    for (let i = 0; i < specCharArr.length; i++) {
        wholePassword.push(specCharArr[i]);
    }
}
if (number === true) {
    for (let i = 0; i < allNumbers.length; i++) {
        wholePassword.push(allNumbers[i]);
    }
}
if (lowercase === true) {
    for (let i = 0; i < lowerCaseLetters.length; i++) {
        wholePassword.push(lowerCaseLetters[i]);
    }
}
if (capital === true) {
    for (let i = 0; i < upperCaseLetters.length; i++) {
        wholePassword.push(upperCaseLetters[i]);
    }
}

var generateEl = document.getElementById('generate');
var textArea = document.getElementById('password');
var myPassword = [];

function generatePswd() {
    myPassword = [];
    for (var i = 0; i < pswdLength; i++) {
        myPassword.push(wholePassword[Math.floor(Math.random() * wholePassword.length)]);
    }
    myPassword.toString();
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

