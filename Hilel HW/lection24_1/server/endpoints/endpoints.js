let data = require('../data/data')
function findEndPoint(req, res) {
     let urlArr = req.url.split(/[^a-zа-яё]/gi).filter(el => el != '')
     if (!urlArr.includes('person')) {
          res.write(JSON.stringify({ 404: 'NOT FOUND' }));
          res.end();
          return;
     }else{
          for (let i = 1; i < urlArr.length; i++) {
               let value = data.user_data.person[urlArr[i]];
               if (!value) {
                    res.write(JSON.stringify({ 404: 'NOT FOUND' }));
                    res.end();
                    return;
               }
          }
     }


     if (req.url === '/person') {
          res.write(JSON.stringify(data.user_data[urlArr[0]]));
          res.end();
     }
     if (urlArr.length === 2&&!req.url.split(/[a-zа-яё]/gi).includes('?')) {
          let newObj = {}
          switch (urlArr[1]) {
               case 'address':
                    newObj.city = data.user_data.person.city;
                    newObj.postCode = data.user_data.person.postCode;
                    newObj.street = data.user_data.person.street;
                    break;
               case 'recipient':
                    newObj.name = data.user_data.person.name;
                    newObj.surname = data.user_data.person.surname;
                    newObj.city = data.user_data.person.city;
                    newObj.postCode = data.user_data.person.postCode;
                    newObj.street = data.user_data.person.street;
                    break;
               default:
                    let value = data.user_data.person[urlArr[1]];
                    newObj[urlArr[1]] = value;
                    break;
          }
          res.write(JSON.stringify(newObj));
          res.end();
     }
     if (req.url.split(/[a-zа-яё]/gi).includes('?')) {
          let newObj = {}
          for (let i = 1; i < urlArr.length; i++) {
               let value = data.user_data.person[urlArr[i]];
               newObj[urlArr[i]] = value;
          }
          res.write(JSON.stringify(newObj));
          res.end();
     }

}
module.exports = { findEndPoint }