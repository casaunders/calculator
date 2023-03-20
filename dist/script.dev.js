"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previousOperandElement, currentOperandElement) {
    _classCallCheck(this, Calculator);

    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {}
  }, {
    key: "appendSelection",
    value: function appendSelection(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }, {
    key: "selectCalculation",
    value: function selectCalculation(operation) {
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }
  }, {
    key: "computeOperation",
    value: function computeOperation() {}
  }, {
    key: "refreshConsole",
    value: function refreshConsole() {
      this.currentOperandElement.innerText = this.currentOperand;
      this.previousOperandElement.innerText = this.previousOperator;
    }
  }]);

  return Calculator;
}();

var numberButton = document.querySelectorAll("[number]");
var calculateButton = document.querySelectorAll("[calculate]");
var clearButton = document.querySelector("[clear]");
var deleteButton = document.querySelector("[delete]");
var equalsButton = document.querySelector("[equals]");
var previousOperandElement = document.querySelector("[dataPreviousOperand]");
var currentOperandElement = document.querySelector("[dataCurrentOperand]");
var calculator = new Calculator(secOperator, primeOperator);
numberButton.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.appendSelection(button.innerText);
    calculator.refreshConsole();
  });
});
calculateButton.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.selectCalculation(button.innerText);
    calculator.refreshConsole();
  });
});