function generatePassword(length) {
    var charset = "";
    var password = "";

   
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    
    if (lowercase) charset += lowercaseChars;
    if (uppercase) charset += uppercaseChars;
    if (numbers) charset += numberChars;
    if (symbols) charset += symbolChars;

   
    if (charset.length === 0) {
        alert("Please select at least one character set.");
        return;
    }

    
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

function genpass() {
    var length = document.getElementById("length").value;
    if (isNaN(length) || length > 20 || length < 4) {
        window.alert('Please enter a number between 4 and  20');
    } else {
        var password = generatePassword(length);
        document.getElementById("result").textContent = password;
    }
}

function copy() {
    var password = document.getElementById("result").innerText;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
}

  