class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete() {

    }

    appendSelection(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    selectCalculation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    computeOperation() {

    }

    refreshConsole() {
        this.currentOperandElement.innerText = this.currentOperand
        this.previousOperandElement.innerText = this.previousOperator
    }
}

const numberButton = document.querySelectorAll("[number]")
const calculateButton = document.querySelectorAll("[calculate]")
const clearButton = document.querySelector("[clear]")
const deleteButton = document.querySelector("[delete]")
const equalsButton = document.querySelector("[equals]")
const previousOperandElement = document.querySelector("[dataPreviousOperand]")
const currentOperandElement = document.querySelector("[dataCurrentOperand]")

const calculator = new Calculator(secOperator, primeOperator)

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendSelection(button.innerText)
        calculator.refreshConsole()
    })
})

calculateButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.selectCalculation(button.innerText)
        calculator.refreshConsole()
    })
})


