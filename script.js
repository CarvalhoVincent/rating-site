const rating = ["0"];
var choice = document.querySelector("#choice");

function saveRate1() {
    rating.pop();
    rating.push(document.getElementById("1").innerHTML);
    console.log(rating[0]);
}

function saveRate2() {
    rating.pop();
    rating.push(document.getElementById("2").innerHTML);
    console.log(rating[0]);
}

function saveRate3() {
    rating.pop();
    rating.push(document.getElementById("3").innerHTML);
    console.log(rating[0]);
}

function saveRate4() {
    rating.pop();
    rating.push(document.getElementById("4").innerHTML);
    console.log(rating[0]);
}

function saveRate5() {
    rating.pop();
    rating.push(document.getElementById("5").innerHTML);
    console.log(rating[0]);
}



function displayThanks() {
    var thanksPage = document.getElementById("thanks");
    thanksPage.style.visibility = "visible";
    document.getElementById("choice").innerHTML = rating;
}


