const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen= (number) =>{
    calculatorScreen.value = number
} 

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (even) => {
        inputNumber(even.target.value)
        updateScreen(currentNumber)
        })
    })
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener ("click", (even) => {
        inputOperator(even.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'

}


const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/' :
            result = prevNumber / currentNumber
            break
        default :
            return
    }
    currentNumber = result
    calculationOperator = ''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',() => {
    clearAll()
    updateScreen(currentNumber)
})
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click',(even)=>{
    inputDesimal(even.target.value)
    updateScreen(currentNumber)
})
inputDesimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}


   





