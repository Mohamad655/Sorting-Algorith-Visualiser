

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
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
                delayInMilliseconds += increment;
                func(j, j+1, arr[j], arr[j+1]);
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
