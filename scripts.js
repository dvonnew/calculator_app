// RUN FUNCTION
function run(){
    const screen = document.getElementById('display-text')
    const numberButtons = document.querySelectorAll('.number')
    const operatorButtons = document.querySelectorAll('.operator')
    const clearButton = document.getElementById('clear')
    const equalButton = document.getElementById('equals')
    const percentButton = document.getElementById('percent')
    const flipButton = document.getElementById('flip')

    const a = []
    const b = []
    let x = 0
    let sign = ''
    

    numberButtons.forEach(button => button.addEventListener('click', ()=> {
        
        if (sign === ''){   
            a.push(button.value)
            display(screen, a.join(''))
        }
        else{
            b.push(button.value)
            display(screen, b.join(''))
        }

        return a,b 
    }))

    operatorButtons.forEach(button=> button.addEventListener('click', ()=>{
        clearScreen(screen);
        sign = button.value
        return sign
    }))

    percentButton.addEventListener('click', ()=>{
        let x = toPercent(a.join(''))
        display(screen, x)
        clearCache(a,b)
        a.push(x)
    })

    flipButton.addEventListener('click', ()=>{
        let x = flipSign(a.join(''))
        display(screen, x)
        clearCache(a,b)
        a.push(x)
    })

    equalButton.addEventListener('click', ()=>{
        clearScreen(screen)
        x = operate(a.join(''), b.join(''), sign)
        display(screen, x)
        clearCache(a,b)
        a.push(x)
        return(a)
    })

    clearButton.addEventListener('click', ()=>{
        clearScreen(screen)
        clearCache(a,b)
        sign = ''
        return sign
    })

}


// OPERATION FUNCTIONS
const add = function(a,b){
    return parseInt(a)+parseInt(b)
};

const subtract = function(a,b){
    return parseInt(a)-parseInt(b)
};

const multiply = function(a,b){
    return parseInt(a)*parseInt(b)
};

const divide = function(a,b){
    return parseInt(a)/parseInt(b)
}

const power = function(a,b){
    return parseInt(a)**parseInt(b)
}

const toPercent = function(a){
    return parseInt(a)/100
}

const flipSign = function(a){
    return parseInt(a)*-1
}

const operate = function (a,b, sign){
    if (sign === '+'){
        return add(a,b)
    }
    else if (sign === '-'){
        return subtract(a,b)
    }
    else if (sign === '*'){
        return multiply(a,b)
    }
    else if (sign === '/'){
        return divide(a,b)
    }
    else if (sign === 'y^x'){
        return power(a,b)
    }
    else if (sign === '%'){
        return toPercent(a)
    }
    else if (sign === '+/-'){
        return flipSign(a)
    }
}

// DISPLAY/USE FUNCTION
function display (screen, num){
    screen.textContent = num
}

function clearScreen(screen, a, b, sign){
    screen.textContent = '';
}

function clearCache(a, b){
    while (a.length>0){
        a.pop();
    }
    while (b.length>0){
        b.pop()
    }

}

run()