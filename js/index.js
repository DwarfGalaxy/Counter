let increase = document.getElementById("increase");
let count = 0;
let firstNumber = document.querySelector('span');
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
firstNumber.innerHTML = count;

increase.onclick = () => {
    count++;
    firstNumber.innerHTML = count;
    if (count > 0) {
        firstNumber.style.color = "green";
    } else if (count == 0) {
        firstNumber.style.color = "black";
    }
    else {
        firstNumber.style.color = "red";
    }

}
decrease.onclick = () => {
    count--;
    firstNumber.innerHTML = count;
    if (count > 0) {
        firstNumber.style.color = "green";
    } else if (count == 0) {
        firstNumber.style.color = "black";
    }
    else {
        firstNumber.style.color = "red";
    }
}
reset.onclick = () => {
    count = 0;
    firstNumber.innerHTML = count;
    if (count > 0) {
        firstNumber.style.color = "green";
    } else if (count == 0) {
        firstNumber.style.color = "black";
    }
    else {
        firstNumber.style.color = "red";
    }
}