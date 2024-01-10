function myFunction(a) {
    var temp = document.getElementById('main-text').value;
    document.getElementById('main-text').value = temp + a;

}
function myCancleFunction() {
    document.getElementById('main-text').value = "";
    document.getElementById('span').textContent = "";
}
function myFunctionPlus() {
    var temp = document.getElementById('main-text').value;
    var num = Number(temp);
    document.getElementById('main-text').value = -num;
}
function addPoint() {
    var temp = document.getElementById('main-text').value;
    document.getElementById('main-text').value = temp + ".";
}
function FunctionSqure() {
    var temp = document.getElementById('main-text').value;
    var num = Number(temp);
    document.getElementById('main-text').value = Math.pow(num, 2);

}
function FunctionSqrt() {
    var temp = document.getElementById('main-text').value;
    var num = Number(temp);
    document.getElementById('main-text').value = Math.sqrt(num);

}
function FunctionQube() {
    var temp = document.getElementById('main-text').value;
    var num = Number(temp);
    document.getElementById('main-text').value = Math.cbrt(num);

}
function Functiondelete() {
    var str = document.getElementById('main-text').value;
    str = str.substring(0, str.length - 1);
    document.getElementById('main-text').value = str;
}
function Operation() {
    switch (arguments[0]) {
        case 1:
            var str = document.getElementById('main-text').value;
            document.getElementById('span').textContent = str + "+";
            document.getElementById('main-text').value = '';
            break;
        case 2:
            var str = document.getElementById('main-text').value;
            document.getElementById('span').textContent = str + "-";
            document.getElementById('main-text').value = '';
            break;
        case 3:
            var str = document.getElementById('main-text').value;
            document.getElementById('span').textContent = str + "x";
            document.getElementById('main-text').value = '';
            break;
        case 4:
            var str = document.getElementById('main-text').value;
            document.getElementById('span').textContent = str + "÷";
            document.getElementById('main-text').value = '';
            break;
        case 5:
            var str = document.getElementById('main-text').value;
            document.getElementById('span').textContent = str + "%";
            document.getElementById('main-text').value = '';
            break;

    }
}
function Funcalculate() {
    var str = document.getElementById('span').textContent;
    var opt = str.charAt(str.length - 1);
    var num1 = Number(str.substring(0, str.length - 1));
    var num2 = Number(document.getElementById('main-text').value);

    switch (opt) {
        case '+':
            document.getElementById('main-text').value = num1 + num2;
            document.getElementById('span').textContent = '';
            break;
        case '-':
            document.getElementById('main-text').value = num1 - num2;
            document.getElementById('span').textContent = '';
            break;
        case 'x':
            document.getElementById('main-text').value = num1 * num2;
            document.getElementById('span').textContent = '';
            break;
        case '÷':
            document.getElementById('main-text').value = num1 / num2;
            document.getElementById('span').textContent = '';
            break;
        case '%':
            document.getElementById('main-text').value = num1 % num2;
            document.getElementById('span').textContent = '';
            break;
    }
}