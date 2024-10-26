

//SyntaxError : Occurs when the code contains syntax that is not valid.
//A SyntaxError is thrown here because of the invalid statement (var a = ;) that is missing a value

try {
    eval("var a = ;");  
} catch (error) {
    console.error(error.name + ": " + error.message);
}


//ReferenceError : Occurs when a variable is referenced that is not declared or initialized.
// A ReferenceError is thrown because nonExistentVariable is not defined.
try {
    console.log(my_var);
  } catch (e) {
    console.error(e.name + ": " + e.message);
  }


// AggregateError (ES2021) : Occurs when multiple errors are wrapped into a single error, often used in Promise.any() or other asynchronous operations.
//AggregateError groups multiple errors into one, useful in cases like Promise.any().

try {
    throw new AggregateError([
        new Error("Error 1"),
        new Error("Error 2")
    ], "Multiple errors occurred");
} catch (error) {
    console.error(error.name + ": " + error.message);
    error.errors.forEach(e => console.error(e.message));
}


//URIError : Occurs when an incorrect URI handling function is used, such as encodeURI() or decodeURI().
// A URIError is thrown because % is not a valid URI component.

try {
    decodeURIComponent("%");  // Invalid URI component
} catch (error) {
    console.error(error.name + ": " + error.message);
}


// EvalError : Occurs when there is an incorrect use of eval() function. However, EvalError is rarely used in modern JavaScript.
//In modern JavaScript, EvalError is rarely used, but it can still be manually thrown to indicate misuse of eval().

try {
    throw new EvalError("Eval is not used properly");
} catch (error) {
    console.error(error.name + ": " + error.message);
}


//RangeError : Occurs when a number is outside an allowable range, such as calling a function with an invalid number of arguments or creating an array with an invalid length.
//A RangeError is thrown because the array length cannot be negative.

try {
    let arr = new Array(-1); 
} catch (error) {
    console.error(error.name + ": " + error.message);
}


// TypeError : Occurs when a value is not of the expected type, or when attempting to perform an operation on an invalid type.
// A TypeError is thrown because toUpperCase is a method for strings, not numbers.

try {
    let num = 5;
    num.toUpperCase();  
} catch (error) {
    console.error(error.name + ": " + error.message);
}
