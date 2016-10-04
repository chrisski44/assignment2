function formValidation() {

    var name = document.testForm.namebox.value;
    var num = document.testForm.favoriteNumber.value;
    var submission = true;

    /* 
    Did a little reading up on how to do RegEx bc I've used them before and saw how helpful they were 
    */

    //Validates that name entry is full and is all letters
    if (document.testForm.namebox.value == "" || !name.match(/^[A-Za-z]+$/)) {
        document.getElementById('nameInput').style.border = "2px solid red";
        document.getElementById('errorName').innerHTML = "Please enter a valid name";
        submission = false;
    }

    //Validates that number is between 1 - 100 and is indeed a number
    if (num < 1 || num > 100 || num == NaN || !num.match(/^[0-9]+$/)) { 
      document.getElementById('errorNumber').innerHTML = "Please enter a valid number";
      document.getElementById('numberBox').style.border = "2px solid red";
      submission = false;
    }

    //If both cases are valid, then the form will submit after alert and reset
    if (submission == true) {
        document.getElementById('errorNumber').innerHTML = "";
        document.getElementById('numberBox').style.border = "1px solid black";
        document.getElementById('nameInput').style.border = "1px solid black";
        document.getElementById('errorName').innerHTML = "";
        alert("Form was submitted successfully");
    }
    return submission;
}

function resetNameForm() {
    document.getElementById('errorName').innerHTML = "";
    document.getElementById('nameInput').style.border = "1px solid black";
}

function resetNumForm() {
    document.getElementById('errorNumber').innerHTML = "";
        document.getElementById('numberBox').style.border = "1px solid black";
}