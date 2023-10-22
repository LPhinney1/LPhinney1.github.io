function seven()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '7';
}
function eight()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '8';
}
function nine()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '9';
}
function four()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '4';
}
function five()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '5';
}
function six()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '6';
}
function one()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '1';
}
function two()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '2';
}
function three()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '3';
}
function zero()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '0';
}
function decimal()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '.';
}
function clearText()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent = '';
}
function addition()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '+';
}
function subtraction()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '-';

}
function multiplication()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '*';
}
function division()
{
    var textEntry = document.getElementById('text-entry');
    textEntry.textContent += '/';
}
function equals()
{
    var textEntry = document.getElementById('text-entry');
    let textStuff = textEntry.textContent;
    textEntry.textContent = eval(textStuff);
}