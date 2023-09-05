function appendNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
}

function appendOperator(operator) {
    var result = document.getElementById("result");
    result.value += operator;
}

function calculate() {
    var result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Erro";
    }
}

function clearCalculator() {
    var result = document.getElementById("result");
    result.value = "";
}