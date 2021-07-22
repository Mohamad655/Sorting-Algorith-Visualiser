const mergeButton = document.getElementById("Merge");
const bubbleButton = document.getElementById("Bubble");
const insertionButton = document.getElementById("Insertion");
const resetButton = document.getElementById("reset");

// const mergeSort = require('./mergesort.js');
const span = document.querySelectorAll("span");
let arr = [];
for (let i = 0; i < span.length; i++) {
    arr[i] = parseInt(span[i].innerText);
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
        arr[i] = Math.floor(Math.random() * 100);
        span[i].innerText = arr[i];
    }

}