class UserValidation {
     
     async userCreateValidation (email,name,password,repeatPassword){
          const emailValidation = await this.emailValidation(email);
          const nameValidation = await this.nameValidation(name);
          const passwordValidation = await this.passwordValidation(password);
          const repeatPasswordValidation = await this.repeatPasswordValidation(password,repeatPassword);
          if(!email||!name||!password||!repeatPassword) return {status:401,msg:'Bad request'}
          else if(!emailValidation) return {status:401,msg:'Bad email'}
          else if(!nameValidation) return {status:401,msg:'Your name is so long'}
          else if(!passwordValidation) return {status:401,msg:'Bad password'}
          else if(!repeatPasswordValidation) return {status:401,msg:'Password dont match with repeat passowrd'}
     }
     async emailValidation(email) {
          return String(email)
               .toLowerCase()
               .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               );
     }
     async nameValidation(name){
          if(name.length>=32){
               return null;
          }else{
               return name;
          }
     }
     async passwordValidation(password){
          if(password.length>=6&&password.length<=32){
               return password;
          }else{
               return null;
          }
     }

     async repeatPasswordValidation(password,repeatPassword){
          console.log(password===repeatPassword);
          if(password===repeatPassword){
               return password;
          }else{
               return null;
          }
     }

}

module.exports = new UserValidation()