const mergeButton = document.getElementById("Merge");
const bubbleButton = document.getElementById("Bubble");
const resetButton = document.getElementById("reset");

// const mergeSort = require('./mergesort.js');
const span = document.querySelectorAll("span");
let arr = [];
for (let i = 0; i < span.length; i++) {
    arr[i] = parseInt(span[i].innerText);
}
var delayInMilliseconds = 0;
mergeButton.onclick = function () {
    mergeSorting();
    mergeButton.disabled = true;
    bubbleButton.disabled = true;
    resetButton.disabled = true;
};
bubbleButton.onclick = function () {
    bubbleSorting();
    mergeButton.disabled = true;
    bubbleButton.disabled = true;
    resetButton.disabled = true;
};

resetButton.onclick = function () {
    for (let i = 0; i < span.length; i++) {
        arr[i] = Math.floor(Math.random() * 100);
        span[i].innerText = arr[i];
    }

}