
function func3(j, key, x) {
    delayInMilliseconds += 1000;
    setTimeout(function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = 'yellow';
        }

        span[j + 1].style.backgroundColor = 'red';
        span[j].style.backgroundColor = 'red';
        setTimeout(function () {

            span[j].innerText = key;
            span[j + 1].innerText = x;

        }, 500);
    }, delayInMilliseconds);
}
function insertionSort() {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            func3(j, key, arr[j]);
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
const insertionSorting = function () {
    delayInMilliseconds = 0;
    insertionSort();
    setTimeout(function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = 'yellow';
        }
        enabling();
    }, delayInMilliseconds + 1000);
}