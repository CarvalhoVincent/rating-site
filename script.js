const rating = ["0"];


function saveRate1() {
    rating.pop();
    rating.push(document.getElementById("1").innerHTML);
}

function saveRate2() {
    rating.pop();
    rating.push(document.getElementById("2").innerHTML);
}

function saveRate3() {
    rating.pop();
    rating.push(document.getElementById("3").innerHTML);
}

function saveRate4() {
    rating.pop();
    rating.push(document.getElementById("4").innerHTML);
}

function saveRate5() {
    rating.pop();
    rating.push(document.getElementById("5").innerHTML);
}

function displayThanks() {
    var thanksPage = document.getElementById("thanks");
    if(rating > 0){
    thanksPage.style.visibility = "visible";
    document.getElementById("choice").innerHTML = rating;
    } else {
        alert("Please select a rating !");
    }
}


