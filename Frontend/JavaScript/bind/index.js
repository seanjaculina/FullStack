//takes in a callback to show the result : we actually return it in this method, an operator and two values
const calculation = (showRes,operator, num1,num2) => {
    let res = null
    switch (operator){
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
        case '/':
            //confirm num2 is not a 0 for division by 0: if validate returns truw, its division by 0 and we will throw an error
            const validate = validateZeros(num2);
            if(validate){
                break;
            }else{
                res = num1 / num2;
            }

        default:
            res = 'Not allowed';
            break;
    }
    //returns a callback that handles outputting the result and a message, but how would the message
    //know which to display corresponding to the operation used? We can use bind
    return showRes(res);
};

const validateZeros = (num) => {
    return num < 0
}

//takes in a bound message that is dynamic to the operation, and the result of the operation:
//this function is called back as the return of our calculation function
const showRes = (outputTest,result) => {
    console.log(outputTest + ' ' + result);
}

//binds a particular message to a particular call at a high level: and the other param of showres can be called with only the calc result of the other operators and values we give
calculation(showRes.bind(this,'The result of addition is:'),'+',2,2);
calculation(showRes.bind(this,'The result of subtraction is:'),'-',2,2);
calculation(showRes.bind(this,'The result of division is:'),'/',23,0);
