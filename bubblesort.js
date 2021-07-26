

function func(i, j, a, b) {
    setTimeout(function () {
        for (let k = 0; k < span.length; k++) {

            if (k !== i) {
                span[k].style.backgroundColor = 'yellow';
            }

        }
        span[i].style.backgroundColor = 'red';
        span[j].style.backgroundColor = 'red';
        setTimeout(function () {

            span[i].innerText = a;
            span[j].innerText = b;
            span[i].setAttribute("style", `height:${a * 4 + 10}px`);
            span[j].setAttribute("style", `height:${b * 4 + 10}px`);

        }, changedelay);
    }, delayInMilliseconds);
}
const bubbleSorting = function () {
    delayInMilliseconds = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
                delayInMilliseconds += increment;
                func(i, j, arr[i], arr[j]);
            }
        }
    }
    setTimeout(function () {
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = 'yellow';
        }
        enabling();
    }, delayInMilliseconds + increment);
}
