/* variables */

let queue = [];
let input = 0;

const resultContainer = document.querySelector("#result");

/* functions */

function calculateQueue(value) {

    if (input !== 0) {
        input = parseFloat(input);
        addToQueue(input);
    }

    let result = value[0];
    let dividedByZero = 0;

    for (let i = 2; i < value.length; i = i + 2) {
        switch (queue[i - 1]) {
            case '+':
                result += value[i];
                break;
            case '-':
                result -= value[i];
                break;
            case '/':
                if (value[i] === 0) dividedByZero = 1;
                else result = result / value[i];
                break;
            case '*': result = result * value[i];
                break;
            case '%': result = result % value[i];
                break;
            case '±': value[i] = value[i] * -1;
                break;
        }
    }

    result = Math.round((result.toFixed(10)) * 100) / 100;
    result = parseFloat(result);

    if (dividedByZero === 1) {
        clearAll();
        resultContainer.innerHTML = "ERROR";
    } else {
        resultContainer.innerHTML = result;
        input = result;
        queue = [];
    }
}

function addToQueue(input) {
    queue.push(input);
}

function clearAll() {
    queue = [];
    input = 0;
    resultContainer.innerHTML = "0";
}

function changeSign() {
    input *= -1;
    resultContainer.innerHTML = queue.join('') + input;
}

function numericButton(arg) {
    if (resultContainer.innerHTML === "ERROR" || (resultContainer.innerHTML == "0" && arg != ".")) resultContainer.innerHTML = "";

    if (!(arg === ".") || !input.match(/[.]/)) {
        input += arg;
        resultContainer.innerHTML += arg;
    }
}

function operatorButton(arg) {
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        resultContainer.innerHTML += arg;
        input = 0;
    }

    if (arg == "-" && isNaN(queue[0]) && input !== "-") {
        input = "-";

        resultContainer.innerHTML = "-";
    }
}

function changeMode() {
    document.querySelector("body").classList.toggle("darkMode");
}
