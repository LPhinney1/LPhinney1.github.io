let textEntry = document.getElementById('text-entry');
function seven() {
    textEntry.textContent += '7';
}
function eight() {
    textEntry.textContent += '8';
}
function nine() {
    textEntry.textContent += '9';
}
function four() {
    textEntry.textContent += '4';
}
function five() {
    textEntry.textContent += '5';
}
function six() {
    textEntry.textContent += '6';
}
function one() {
    textEntry.textContent += '1';
}
function two() {
    textEntry.textContent += '2';
}
function three() {
    textEntry.textContent += '3';
}
function zero() {
    textEntry.textContent += '0';
}
function decimal() {
    textEntry.textContent += '.';
}
function clearText() {
    textEntry.textContent = '';
}
function addition() {
    textEntry.textContent += '+';
}
function subtraction() {
    textEntry.textContent += '-';
}
function multiplication() {
    textEntry.textContent += '*';
}
function division() {
    textEntry.textContent += '/';
}
function equals() {
    let textStuff = textEntry.textContent;
    textEntry.textContent = eval(textStuff);
}
function roundToFive(num) {
    return (Math.round(num + "e" + 5) + "e-" + 5);
}