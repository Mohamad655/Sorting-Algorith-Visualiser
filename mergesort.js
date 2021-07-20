

function func2() {
    var a = arr.slice(0);
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    setTimeout(function () {
        setTimeout(function () {

            for (let i = 0; i < a.length; i++) {
                console.log(a[i]);
                span[i].innerText = a[i];
            }

        }, 500);


    }, delayInMilliseconds);
}
function setcolor(l, m, r) {
    setTimeout(function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = 'yellow';
        }
        for (let i = l; i <= m; i++) {
            span[i].style.backgroundColor = 'red';
        }
        for (let i = m + 1; i <= r; i++) {
            span[i].style.backgroundColor = 'blue';
        }

    }, delayInMilliseconds);
}
function merge(arr, l, m, r) {
    console.log(`${l} ${m} ${r}`)
    var n1 = m - l + 1;
    var n2 = r - m;
    delayInMilliseconds += 1000;
    setcolor(l, m, r);
    var L = new Array(n1);
    var R = new Array(n2);
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    var i = 0;
    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }


    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    func2();
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
const n = arr.length;
const mergeSorting = function () {
    delayInMilliseconds = 0;
    mergeSort(arr, 0, n - 1);
    setTimeout(function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = 'yellow';
        }
        mergeButton.disabled = false;
        bubbleButton.disabled = false;
        resetButton.disabled = false;
    }, delayInMilliseconds + 1000);
}




// module.exports.solve = solve;