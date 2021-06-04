let currentResult = 0;
let userHistoryLog = [];
// Operators in JS
// Addition : +
// Substraction : -
// Division : /
// Get Remainder : %
// Exponentation : **

// Writing Function
function getUserInput(){
    // getting userInput from Vendor.js
    return parseInt(userInput.value);
}

function getUserHistory(operation, num1, num2, result){
    const logEntry ={
        operation : operation,
        num1 : num1,
        num2 : num2,
        result : result
    }
    userHistoryLog.push(logEntry);
    console.log(userHistoryLog);
}

function add(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} + ${enteredNumber}`;
    const number1 = currentResult   
    currentResult = currentResult + enteredNumber;
    // Convert sting to number without pasreInt
    // currentResult = currentResult + +userInput.value;
    // Calling a function from vendor.js and passing parameters from app.js
    outputResult(currentResult, calculationDescription);
    getUserHistory("Addition", number1, enteredNumber, currentResult);
}

function substract(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} - ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Substraction", number1, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} * ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Multiplication", number1, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserInput()
    let calculationDescription = `${currentResult} / ${enteredNumber}`;   
    const number1 = currentResult
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculationDescription);
    getUserHistory("Division", number1, enteredNumber, currentResult);
}

//Calling from vendor.js
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




