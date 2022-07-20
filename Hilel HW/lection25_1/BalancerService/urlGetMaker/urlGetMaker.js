const { wetherKey } = require("../settingsModule/keys");

 function urlGetMaker(req,res){
     let url = new URL('http://localhost:7070'+req.url)
     let urlArr = url.pathname.split(/[^a-zа-яё]/gi).filter(el => el != '');
     let params = new URLSearchParams(url.searchParams);
     let cords = params.values();
     if(urlArr.includes('binance')&&url.search.length){
          let arr = []
          for([keys,value] of url.searchParams){
               arr.push(`https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol=${keys}USDT`)
          }
          return arr;
     }else if(urlArr.includes('weather')&&url.search.length){
          let[lat,lon] = cords;
          let newUrl = urlArr.includes('current')?
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&${lon}&appid=${wetherKey}&units=metric`
          :
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${wetherKey}&units=metric`
          return newUrl; 
     }else if(urlArr.includes('weather')&&!url.search.length){
          let newUrl = urlArr.includes('current')?
          `https://api.openweathermap.org/data/2.5/weather?lat=46.42932496512472&lon=30.7171652775876&appid=${wetherKey}&units=metric`
          :
          `https://api.openweathermap.org/data/2.5/forecast?lat=46.42932496512472&lon=30.7171652775876&appid=${wetherKey}&units=metric`
          return newUrl
     }else{
          res.write('404');
          res.end();
          return;
     }
}
module.exports ={urlGetMaker}