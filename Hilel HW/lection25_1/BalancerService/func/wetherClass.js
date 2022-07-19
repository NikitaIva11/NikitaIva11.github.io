const { fetchFunc } = require("../fetchClass/fetchClass");
const { wetherKey } = require("../settingsModule/keys");

class weatherClass {
     static async weather24(req, res, url) {
          try {
               let text = ''
               let body = await fetchFunc.fetchGet(url)
               if (body.cod == 400) {
                    res.write(body.message)
                    res.end()
                    return;
               }
               body.list.forEach(el => {
                    text += `Время:${el.dt_txt}\nТемпература:${el.main.temp}` + "\n\n"
               });
               let callBack = await fetchFunc.fetchPost(text, req, res)
               res.write(callBack)
               res.end()
          } catch (error) {
               console.log(error)
          }
     }
     static async weatherNow(req, res, url) {
          try {
               let body = await fetchFunc.fetchGet(url);
               if (body.cod == 400) {
                    res.write(body.message)
                    res.end()
                    return;
               }
               let text = `Температура:${body.main.temp}` + "\n" + `Ощущается как:${body.main.feels_like}` + "\n" + `Погода:${body.weather[0].description}`;
               let callBack = await fetchFunc.fetchPost(text, req, res);
               res.write(callBack)
               res.end()
          } catch (error) {
               console.log(error)
          }
     }
     static async mainWeather(req, res, urlArr, url) {
          if (!url) return;
          if (urlArr.pathname === '/weather/forecast/24' ) this.weather24(req, res, url);
          else if (urlArr.pathname === '/weather/current/') this.weatherNow(req, res, url);
          else res.end('404');
     }
}
module.exports = { weatherClass };