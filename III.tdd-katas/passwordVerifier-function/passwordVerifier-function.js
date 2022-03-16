const isNotNull = (password) => { password === null }

const isLengthLargerThan8 = (password) => { password.length < 8}

const itContainsLowercaseLetter = (password) => {
    if (password.search(/[a-z]/) === -1) {
        return true;
    } else {
        return false
    }
}
const itContainsUppercaseLetter = (password) => {
    if (password.search(/[A-Z]/) === -1) {
        return true;
    } else {
        return false
    }
}
const itContainsANumber = (password) => {
    if (password.search(/\d+/g) === -1) {
        return true;
    } else {
        return false
    }
}

const passwordVerifier = (password) => {
    let contador = 0;

    const resultLowercase = itContainsLowercaseLetter(password);
    const resultNotNull = isNotNull(password);
    const resultLength = isLengthLargerThan8(password);
    const resultUppercase = itContainsUppercaseLetter(password);
    const resultNumber = itContainsANumber(password);

    if (resultLowercase === true || resultNotNull === true) {
        return 'Not ok';
    } else {
        contador +=2;
        console.log(contador);
        if (resultLength === false) {
            contador +=1;
        }
        if (resultUppercase === false) {
            contador +=1;
        }
        if (resultNumber === false) {
            contador +=1;
        }
        }
        if (contador >= 3) {
            return 'Ok';
        }
        else{
            return 'Not ok';
        }
        // const verify = (password) => {
        // }
    }

    module.exports = {
        passwordVerifier
    }