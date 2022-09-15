const fs = require('fs');
const BooksService = require('./BooksService');
const UserService = require('./UserService');
class UserActionService {
     async toggleFavorite(userId,bookId){
          const user = await UserService.getUserDataById(userId);
          const book = await BooksService.getBookById(bookId);

          if(!user)return{status:401,mag:'user doesnt exist'};
          if(!book)return{status:401,mag:'book doesnt exist'};

          if(user.favorite.some(el=>el===bookId)){

               user.favorite.forEach((el,index)=>{
                    if(el===bookId){
                         user.favorite.splice(index,1)
                    }
               });

               fs.writeFile(UserService.dirname + `user-${userId}.json` ,JSON.stringify(user),function(err) {if(err)throw err});

               return{status:200,msg:'book removed',favorite:user.favorite};    
          }
          else{
               user.favorite.push(book);

               fs.writeFile(UserService.dirname + `user-${userId}.json` ,JSON.stringify(user),function(err) {if(err)throw err});

               return{status:200,msg:'book added',favorite:user.favorite};
          }
     }
};
module.exports = new UserActionService();