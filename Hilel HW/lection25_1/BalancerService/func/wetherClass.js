const { fetchFunc } = require("../fetchClass/fetchClass");
const { wetherKey } = require("../settingsModule/keys");

class weatherClass{
     static async weather24(req, res) {
          try {
               let text = ''
               let body = await fetchFunc.fetchGet(`https://api.openweathermap.org/data/2.5/forecast?lat=46.42932496512472&lon=30.7171652775876&appid=${wetherKey}&units=metric`)
               body.list.forEach(el => {
                    text += `Время:${el.dt_txt}\nТемпература:${el.main.temp}` + "\n\n"
               });
               let callBack = await fetchFunc.fetchPost(text,req, res)
               res.write(callBack)
               res.end()
          } catch (error) {
               console.log(error)
          }
     }
     static async weatherNow(req, res) {
          try {
               let body = await fetchFunc.fetchGet(`https://api.openweathermap.org/data/2.5/weather?lat=46.42932496512472&lon=30.7171652775876&appid=${wetherKey}&units=metric`);
               let text = `Температура:${body.main.temp}` + "\n" + `Ощущается как:${body.main.feels_like}` + "\n" + `Погода:${body.weather[0].description}`;
               let callBack = await fetchFunc.fetchPost(text,req, res);
               res.write(callBack)
               res.end()
          } catch (error) {
               console.log(error)
          }
     }
}
module.exports = { weatherClass };