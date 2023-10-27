const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator_display')
const keys = calculator.querySelector('.calculator_keys')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent
            }
            else { display.textContent = displayedNum + keyContent }
            calculator.dataset.previousKeyType = 'number'
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) { display.textContent = displayedNum + '.' }
            else if (previousKeyType === 'operator' || previousKeyType === 'calculate') { display.textContent = '0.' }
            calculator.dataset.previousKeyType = 'decimal'
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            const number1 = calculator.dataset.number1
            const operator = calculator.dataset.operator
            const number2 = displayedNum
            if (number1 && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(number1, operator, number2)
                display.textContent = calcValue
                calculator.dataset.number1 = calcValue
            }
            else { calculator.dataset.number1 = displayedNum }
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action
        }
        if (action === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.number1 = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            }
            else { key.textContent = 'AC' }
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        }
        if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }
        if (action === 'calculate') {
            let number1 = calculator.dataset.number1
            const operator = calculator.dataset.operator
            let number2 = displayedNum
            if (number1) {
                if (previousKeyType === 'calculate') {
                    number1 = displayedNum
                    number2 = calculator.dataset.modValue
                }
                display.textContent = calculate(number1, operator, number2)
            }
            calculator.dataset.modValue = number2
            calculator.dataset.previousKeyType = 'calculate'
        }
    }
})
const calculate = (number1, operator, number2) => {
    let result = ''
    if (operator === 'add') { result = parseFloat(number1) + parseFloat(number2) }
    else if (operator === 'subtract') { result = parseFloat(number1) - parseFloat(number2) }
    else if (operator === 'multiply') { result = parseFloat(number1) * parseFloat(number2) }
    else if (operator === 'divide') { result = parseFloat(number1) / parseFloat(number2) }
    return result
}