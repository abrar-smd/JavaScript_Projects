function increase() {
    var count = document.getElementById('counter').innerHTML;
    count++;
    document.getElementById('counter').innerHTML = count;
}
function decrease() {
    var count = document.getElementById('counter').innerHTML;
    count--;
    document.getElementById('counter').innerHTML = count;
}
function reset() {
    document.getElementById('counter').innerHTML = 0;
}