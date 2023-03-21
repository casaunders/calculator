const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const deleteButton = document.querySelector('[delete]')
const clearButton = document.querySelector('[clear]')
const previousDisplay = document.querySelector('[previousOperator]')
const currentDisplay = document.querySelector('[currentOperator]')

class Calculator {
    constructor(previousDisplay, currentDisplay) {
      this.previousDisplay = previousDisplay
      this.currentDisplay = currentDisplay
      this.clear()
    }
  
    clear() {
      this.currentOperator = ''
      this.previousOperator = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperator = this.currentOperator.slice(0, -1)
    }
  
    displayNumber(number) {
      if (number === '.' && this.currentOperator.includes('.')) return
      this.currentOperator = this.currentOperator + number
    }
  
    chooseOperator(operation) {
      if (this.currentOperator === '') return
      if (this.previousOperator !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperator = this.currentOperator
      this.currentOperator = ''
    }
  
    compute() {
      let computation
      const previous = parseFloat(this.previousOperator)
      const current = parseFloat(this.currentOperator)
      switch (this.operation) {
        case '+':
          computation = previous + current
          break
        case '-':
          computation = previous - current
          break
        case '*':
          computation = previous * current
          break
        case '÷':
          computation = previous / current
          break
        default:
          return
      }
      this.currentOperator = computation
      this.operation = undefined
      this.previousOperator = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerNumber = parseFloat(stringNumber.split('.')[0])
      const floatNumber = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerNumber)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerNumber
      }
      if (floatNumber != null) {
        return `${integerDisplay}.${floatNumber}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentDisplay.innerText =
        this.getDisplayNumber(this.currentOperator)
      if (this.operation != null) {
        this.previousDisplay.innerHTML =
          `${this.getDisplayNumber(this.previousOperator)} ${this.operation}`
      } else {
        this.previousDisplay.innerHTML = ''
      }
    }
  }
  
  const calculator = new Calculator(previousDisplay, currentDisplay)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.displayNumber(button.innerHTML)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperator(button.innerHTML)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })


