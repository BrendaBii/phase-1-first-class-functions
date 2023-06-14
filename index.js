function receivesAFunction(callFunction){
    const num1 = 2;
    const num2 = 1;
    return callFunction();
};
receivesAFunction(() => "This is a callback.")

function returnsANamedFunction(){
    return function Named(){ return "I am named."};
};

function returnsAnAnonymousFunction(){
    return (() => "I am a string");
};