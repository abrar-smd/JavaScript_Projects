function appendNumber(val) {
    document.getElementById("result").value += val;
}
function appendOperator(val) {
    document.getElementById("result").value += val;
}
function calculate() {
    var val = document.getElementById("result").value;
    var res = eval(val);
    document.getElementById("result").value = res;
}
function clearResult() {
    document.getElementById("result").value = "";
}