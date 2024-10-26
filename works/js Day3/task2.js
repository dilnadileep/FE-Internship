

function calculateSquareRoot(number) {


    if (isNaN(number) || number < 0) {
        throw new Error("Input must be a valid number !!");
    }

    return Math.sqrt(number);
}

try {
    console.log(calculateSquareRoot(256));
    // console.log(calculateSquareRoot(-4));  
    // console.log(calculateSquareRoot("abc")); 
} catch (error) {
    console.error(error.message);
}
