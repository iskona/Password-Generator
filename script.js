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
        alert("It looks like you didn't choose ane of character type. Please refresh the page and try again.");
        getCharType();
    };
}
getCharType();


var allNumbers = "0123456789";
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var wholeCharSet;
if (special === true) {
    wholeCharSet = specChar;
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

function hasCharsFromSet(password, charSet) {
    for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < charSet.length; j++) {
            if (password[i] === charSet[j]) {
                return true;
            }
        }
    }
    return false;
}

function badPassword(password) {
    if (special === true && !hasCharsFromSet(password, specChar)) {
        return true;
    }

    if (number === true && !hasCharsFromSet(password, allNumbers)) {
        return true;
    }

    if (lowercase === true && !hasCharsFromSet(password, lowerCaseLetters)) {
        return true;
    }

    if (capital === true && !hasCharsFromSet(password, upperCaseLetters)) {
        return true;
    }

    return false;
}

function generatePswd() {
    var textArea = document.getElementById('password');
    var myPassword;
    do {
        myPassword = "";
        for (var i = 0; i < pswdLength; i++) {
            myPassword += wholeCharSet[Math.floor(Math.random() * wholeCharSet.length)];
        }
        console.log("Your candidate password is: " + myPassword);
    } while (badPassword(myPassword));
    textArea.textContent = myPassword;
};

function copyText() {
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
};

