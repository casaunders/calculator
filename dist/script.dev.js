"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var numberButtons = document.querySelectorAll('[number]');
var operationButtons = document.querySelectorAll('[operation]');
var equalsButton = document.querySelector('[equals]');
var deleteButton = document.querySelector('[delete]');
var clearButton = document.querySelector('[clear]');
var previousDisplay = document.querySelector('[previousOperator]');
var currentDisplay = document.querySelector('[currentOperator]');

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previousDisplay, currentDisplay) {
    _classCallCheck(this, Calculator);

    this.previousDisplay = previousDisplay;
    this.currentDisplay = currentDisplay;
    this.clear();
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOperator = '';
      this.previousOperator = '';
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.currentOperator = this.currentOperator.slice(0, -1);
    }
  }, {
    key: "displayNumber",
    value: function displayNumber(number) {
      if (number === '.' && this.currentOperator.includes('.')) return;
      this.currentOperator = this.currentOperator + number;
    }
  }, {
    key: "chooseOperator",
    value: function chooseOperator(operation) {
      if (this.currentOperator === '') return;

      if (this.previousOperator !== '') {
        this.compute();
      }

      this.operation = operation;
      this.previousOperator = this.currentOperator;
      this.currentOperator = '';
    }
  }, {
    key: "compute",
    value: function compute() {
      var computation;
      var previous = parseFloat(this.previousOperator);
      var current = parseFloat(this.currentOperator);

      switch (this.operation) {
        case '+':
          computation = previous + current;
          break;

        case '-':
          computation = previous - current;
          break;

        case '*':
          computation = previous * current;
          break;

        case '÷':
          computation = previous / current;
          break;

        default:
          return;
      }

      this.currentOperator = computation;
      this.operation = undefined;
      this.previousOperator = '';
    }
  }, {
    key: "getDisplayNumber",
    value: function getDisplayNumber(number) {
      var stringNumber = number.toString();
      var integerNumber = parseFloat(stringNumber.split('.')[0]);
      var floatNumber = stringNumber.split('.')[1];
      var integerDisplay;

      if (isNaN(integerNumber)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerNumber;
      }

      if (floatNumber != null) {
        return "".concat(integerDisplay, ".").concat(floatNumber);
      } else {
        return integerDisplay;
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.currentDisplay.innerText = this.getDisplayNumber(this.currentOperator);

      if (this.operation != null) {
        this.previousDisplay.innerHTML = "".concat(this.getDisplayNumber(this.previousOperator), " ").concat(this.operation);
      } else {
        this.previousDisplay.innerHTML = '';
      }
    }
  }]);

  return Calculator;
}();

var calculator = new Calculator(previousDisplay, currentDisplay);
numberButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.displayNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});
operationButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.chooseOperator(button.innerHTML);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener('click', function (button) {
  calculator.compute();
  calculator.updateDisplay();
});
clearButton.addEventListener('click', function (button) {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener('click', function (button) {
  calculator["delete"]();
  calculator.updateDisplay();
});