/* variables */

let resultString = "";
let input = 0;

const resultContainer = document.querySelector("#result");

/* functions */

function calculateQueue(value) {

    if (input !== 0) {
        input = parseFloat(input);
        addToQueue(input);
    }

    let result = eval(resultString);

    result = Math.round((result.toFixed(10)) * 100) / 100;
    result = parseFloat(result);

    resultContainer.innerHTML = result;
    input = parseFloat(result);;
    resultString = "";
}

function addToQueue(input) {
    resultString += input;
}

function clearAll() {
    resultString = "";
    input = 0;
    resultContainer.innerHTML = "0";
}

function changeSign() {

    if (resultContainer.innerHTML[0] === "-") resultString = resultContainer.innerHTML.substring(1);
    else resultString = '-' + resultContainer.innerHTML;
    resultContainer.innerHTML = resultString;
}

function numericButton(arg) {
    if (resultContainer.innerHTML === "Error" || resultContainer.innerHTML === "Infinity" || (resultContainer.innerHTML == "0" && arg != ".")) resultContainer.innerHTML = "";

    if (!(arg === ".") || !input.match(/[.]/)) {
        input += parseFloat(arg);
        resultContainer.innerHTML += arg;
    }
}

function operatorButton(arg) {
    if (input !== 0 && input !== "-" && input !== "±") {
        input = parseFloat(input);
        resultString += input;
        resultString += arg;
        resultContainer.innerHTML += arg;
        input = 0;
    }

    if (arg == "-" && isNaN(resultString.substring(0, 1)) && input !== "-" && input !== "±") {
        input = "-";

        resultContainer.innerHTML = "-";
    }
}

function changeMode() {
    document.querySelector("body").classList.toggle("darkMode");
}
