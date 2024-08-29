const countvalue = document.getElementById('count');
console.log(countvalue.textContent);
let c = 0;

function incr() {
    if (c < 20) {
        c++;
        countvalue.textContent = c;
    }
}

function decr() {
    if (c > 0) {
        c--;
        countvalue.textContent = c;
    }
}

function reset() {
    c = 0;
    countvalue.textContent = c;
}
