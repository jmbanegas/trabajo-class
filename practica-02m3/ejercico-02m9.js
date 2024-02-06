'use strict'
//SOLO ES PLANTILLA
class User{
    constructor(username, pasword, email){  //metodo 1.constructor
// esto son las clases        
        this.username = username;
        this.pasword = pasword;
        this.email = email;
    }
//comportamiento: cada comportamiento esta definido un login 
login(username, pasword){                  //metodo2. login
    //validar el usuario y contraseña is (var1 ===var && var1 ===var) else el usuario pasword incorrecto 
    if (username ===this.username && this.pasword ===pasword){
        alert('Welcome');
    }else{
        alert('OOOps !!!');
    } 
}

resetPassword (newPassword)   {  //metodo 3
    this.pasword = newPassword;
}
    updataInfo (newEmail){       //metodo 4
    this.email = newEmail;
    }

showInfo (){
    alert(`Usuario: ${this.username} (${this.email})`)
}
}
//INSTANCIAR:CREAR UN OBJETO DENTRO DE LA CLASE
let user = new User('carlitos', '0602', 'carlitos@gmail.com');

user.login('carlitos','0602');
user.resetPassword('admin');
user.login('carlitos','admin');
user.updataInfo('carlitos@gmail.com');
user.login('carlitos','carlitos.c@gmail.com');
user.showInfo();