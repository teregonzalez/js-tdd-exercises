const verify = (password) => {
    if(password.length<8){
        throw new Error("Password is too short. must contain 8 digits")
    }if(password.search(/[a-z]/) === -1){
        throw new Error("Password must contain a letter")
    }
    return "Ok"
}

module.exports = {
    verify
};