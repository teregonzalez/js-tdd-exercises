const isNotNull = (password) => {
    if (password === null) {
        return true
    } else {
        return false
    }
}

const isLengthLargerThan8 = (password) => {
    if (password.length < 8) {
        return true;
    } else {
        return false
    }
}

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
    console.log(resultLowercase)
    const resultNotNull = isNotNull(password);
    console.log(resultNotNull)
    const resultLength = isLengthLargerThan8(password);
    console.log(resultLength)
    const resultUppercase = itContainsUppercaseLetter(password);
    console.log(resultUppercase)
    const resultNumber = itContainsANumber(password);
    console.log(resultNumber)

    // switch

    if (resultLowercase === true || resultNotNull === true) {
        return 'Not ok'
    } else {
        contador +=2
        console.log(contador)
        if (resultLength === false) {
            contador +=1
        }
        if (resultUppercase === false) {
            contador +=1
        }
        if (resultNumber === false) {
            contador +=1
        }
        }
        if (contador >= 3) {
            return 'Ok';
    }

        // const verify = (password) => {
        // }
        
    }

    module.exports = {
        passwordVerifier
    }