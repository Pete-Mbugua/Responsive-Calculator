function appendToResult(value) {
  var result = document.getElementById("result");
  result.value += value;
}

function clearResult() {
  var result = document.getElementById("result");
  result.value = "";
}

function calculate() {
  var result = document.getElementById("result");
  try {
    var calculation = eval(result.value);
    result.value = calculation;
  } catch (error) {
    result.value = "Error";
  }
}