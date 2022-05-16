const rating = ["0"];


function saveRate(el) {
    rating.pop();
    rating.push(el.value);
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


