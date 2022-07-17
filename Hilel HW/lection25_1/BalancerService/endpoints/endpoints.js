const { binanceBTC } = require("../func/binanceBTC");
const { weatherClass } = require("../func/wetherClass");


async function endPoints(req,res){
     let urlArr = req.url.split(/[^a-zа-яё]/gi).filter(el => el != '');
     let symbolArr  = req.url.split(/[a-zа-яё]/gi).filter(el => el != '')

     if(urlArr[0] === 'binance'&&symbolArr.includes('?')) binanceBTC(req,res,urlArr);
     else if(req.url === '/weather/forecast/24') weatherClass.weather24(req,res);
     else if(req.url ==='/weather/current') weatherClass.weatherNow(req,res);
     else {
          res.write('404')
          res.end()
     }
}

module.exports = {endPoints};