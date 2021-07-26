const mergeButton = document.getElementById("Merge");
const bubbleButton = document.getElementById("Bubble");
const insertionButton = document.getElementById("Insertion");
const resetButton = document.getElementById("reset");

// const mergeSort = require('./mergesort.js');
const parent = document.querySelector(".parent");
parent.style = "flex-direction:row";
const span = [];
let arr = [];
for (let i = 0; i < 16; i++) {
    const iDiv = document.createElement('div');
    parent.appendChild(iDiv);
    span[i] = iDiv;
    arr[i] = Math.floor(Math.random() * 90) + 10;
    span[i].innerText = arr[i];
    span[i].setAttribute("style", `height:${arr[i] * 4 + 10}px`);
}

function disabling() {
    mergeButton.disabled = true;
    bubbleButton.disabled = true;
    resetButton.disabled = true;
    insertionButton.disabled = true;
}
function enabling() {
    mergeButton.disabled = false;
    bubbleButton.disabled = false;
    resetButton.disabled = false;
    insertionButton.disabled = false;
}
var delayInMilliseconds = 0;
const increment = 500;
const changedelay = 250;
mergeButton.onclick = function () {
    mergeSorting();
    disabling();
};
bubbleButton.onclick = function () {
    bubbleSorting();
    disabling();
};
insertionButton.onclick = function () {
    insertionSorting();
    disabling();
};

resetButton.onclick = function () {
    for (let i = 0; i < span.length; i++) {
        arr[i] = Math.floor(Math.random() * 90) + 10;
        span[i].innerText = arr[i];
        span[i].setAttribute("style", `height:${arr[i] * 3 + 10}px`);
    }

}