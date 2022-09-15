const fs = require('fs');
const BooksService = require('./BooksService');
class UserData {

     constructor() {
          this.dirname = 'DATA/user-data/';
          this.filesName = this.allUsersFiles();
          this.allUsersData = this.getAllUsersData();
     }

     async allUsersFiles() {
          return new Promise((resolve, reject) => {
               return fs.readdir(this.dirname, function (err, data) {
                    if (err) throw err;
                    resolve(data);
               });
          });
     };
     async getUserDataById(id) {
          const userId = `user-${id}.json`;
          const files = await this.filesName;
          
          if (!files.includes(userId)) {
               return false;
          };
          return new Promise((resolve, reject) => {
               fs.readFile(this.dirname + userId, 'utf-8', function (err, data) {
                    resolve(JSON.parse(data));
               });
          });
     };
     async getAllUsersData() {
          const filesData = await this.filesName;
          let userData = [];
          return new Promise((resolve, reject) => {
               for (let index = 0; index < filesData.length; index++) {
                    const element = filesData[index];
                    fs.readFile(this.dirname + element, 'utf-8', function (err, data) {
                         const parseData = JSON.parse(data);
                         userData.push(parseData);
                         if (index === filesData.length - 1) {
                              resolve(userData);
                         };
                    });
               };
          });
     };
     async postUser(email, name, password, repeatPassword) {

          const id = btoa(email);

          const user = await this.getUserDataById(id);

          if (user) return { status: 401, msg: 'user exist' };

          const userFullData = {...{email,name,password},favorite:[]};

          fs.writeFile(this.dirname + `user-${id}.json`, JSON.stringify(userFullData), function (err) {
               if (err) throw err
          });

          this.filesName = this.allUsersFiles();

          return { status: 200, msg: 'user create', token: id,name:name};
     };
     async getUsersFavoriteData(id){
          const user = await this.getUserDataById(id);
          return user.favorite
     }
     async toggleFavorite(userId,bookId){
          const user = await this.getUserDataById(userId);
          const book = await BooksService.getBookById(bookId);
          if(!user||user.status>=400)return{status:401,mag:'user doesnt exist'};
           if(!book||book.status>=400)return{status:401,mag:'book doesnt exist'};
               if(user.favorite.some(el=>el.id===bookId)){

                    user.favorite.forEach((el,index)=>{
                         if(el.id===bookId){
                              user.favorite.splice(index,1)
                         }
                    });
     
                    fs.writeFile(this.dirname + `user-${userId}.json` ,JSON.stringify(user),function(err) {if(err)throw err});
     
                    return{status:200,msg:'book removed',favorite:user.favorite};    
               }
               else{
                    user.favorite.push({...book,...{progress:'0'}});
                    fs.writeFile(this.dirname + `user-${userId}.json` ,JSON.stringify(user),function(err) {if(err)throw err});
     
                    return{status:200,msg:'book added',favorite:user.favorite};
               }
         
     }
     async postFavoriteProgress(userId,bookId,progress){
          const user = await this.getUserDataById(userId);
          const book = await BooksService.getBookById(bookId);

          if(!user||user.status>=400)return{status:401,mag:'user doesnt exist'};
          if(!book||book.status>=400)return{status:401,mag:'book doesnt exist'};

          user.favorite.forEach(el=>{
               if(el.id===bookId){
                    el.progress = progress;
               }
          })
          fs.writeFile(this.dirname + `user-${userId}.json` ,JSON.stringify(user),function(err) {if(err)throw err});
          return {status:200,msg:'book progress added',favorite:user.favorite};
     }
};
module.exports = new UserData();