
// OPERATION FUNCTIONS
const add = function(a,b){
    return a+b
};

const subtract = function(a,b){
    return a-b
};

const multiply = function(a,b){
    return a*b
};

const divide = function(a,b){
    return a/b
}

const power = function(a,b){
    return a**b
}

const toPercent = function(a){
    return a/100
}

const flipSign = function(a){
    return a*-1
}

const operate = function (a,b, sign){
    if (sign === '+'){
        add(a,b)
    }
    else if (sign === '-'){
        subtract(a,b)
    }
    else if (sign === '*'){
        multiply(a,b)
    }
    else if (sign === '/'){
        divide(a,b)
    }
    else if (sign === '%'){
        return toPercent(a)
    }
    else if (sign === '+/-'){
        return flipSign(a)
    }
}