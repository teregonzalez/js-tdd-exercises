class PasswordVerifier {

    // Crea un objeto a partir de una clase
    constructor(password){
        this.password = password;
        this.errores = [];
    }

    
    verify() {
        let acumulador = 2;

        try {
            this.isNotNull();
            this.itContainsLowercaseLetter();
            try {
                this.isLengthLargerThan(8);
                acumulador++;
            } catch (error) {
                this.errores.push(error.message);
            }
            try {
                this.itContainsUppercaseLetter();
                acumulador++;
            } catch (error) {
                this.errores.push(error.message);
            }
            try {
                this.itContainsANumber();
                acumulador++;
            } catch (error) {
                this.errores.push(error.message);
            }
            if(acumulador>=3){
                return 'Ok'
            }else{
                return 'Not ok'
            }
        } catch (error) {
            this.errores.push(error.message);
            return 'Not ok'
        }
    }

    isNotNull() {
        if(this.password === null){
            throw new Error('Password is null')
        }
    }

    isLengthLargerThan(limit){
        if(this.password.length<limit){
            throw new Error('Password is too short. must contain 8 digits')
        }
    }

    itContainsLowercaseLetter(){
        if(this.password.search(/[a-z]/) === -1){
            throw new Error('Password must contain a lowercase letter')
        }
    }
    itContainsUppercaseLetter(){
        if(this.password.search(/[A-Z]/) === -1){
            throw new Error('Password must contain an uppercase letter')
        }
    }
    itContainsANumber(){
        if(this.password.search(/\d+/g) === -1){
            throw new Error('Password must contain a number')
        }
    }
}

module.exports = PasswordVerifier;
