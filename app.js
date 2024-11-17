const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)

let calculation = []
let accumulativeCalculation

function calculate(button){
    const value = button.textContent
    if (value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = ''
    } else if (value == '='){
        console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else if (value === '{-'){
        calculation.pop() /* pop is removing something in a stack which is a data structure*/
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    } else{
        calculation.push(value) /* push is adding something giving input in a stack which is a data structure*/
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
