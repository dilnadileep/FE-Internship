

function validatePassword(password) {

    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long!!");
    }


    if (!/[0-9]/.test(password)) {
        throw new Error("Password must contain at least one number!!");
    }

    return "Password is valid";
}

try {
    console.log(validatePassword("abcdefg"));        
    
} catch (error) {
    console.error(error.message);
}
