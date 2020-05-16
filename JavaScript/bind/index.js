const calculation = (showRes,operator, num1,num2) => {
    let res = null
    switch (operator){
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        default:
            res = 'Not allowed';
            break;
    }
    //returns a callback that handles outputting the result and a message, but how would the message
    //know which to display corresponding to the operation used? We can use bind
    return showRes(res);
};

//takes in a bound message that is dynamic to the operation, and the result of the operation:
//this function is called back as the return of our calculation function
const showRes = (outputTest,result) => {
    console.log(outputTest + ' ' + result);
}

calculation(showRes.bind(this,'The result of addition is:'),'+',2,2);
calculation(showRes.bind(this,'The result of subtraction is:'),'-',2,2);
calculation(showRes.bind(this,'The result of addition is:'),'+',23,2);
