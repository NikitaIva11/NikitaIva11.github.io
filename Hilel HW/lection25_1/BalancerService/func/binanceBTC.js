const { fetchFunc } = require("../fetchClass/fetchClass");


async function binanceBTC(req, res, params) {
     try {
          let text = ''
          if (params.length === 1) {
               res.write('no params')
               res.end()
               return;
          }
          for (let index = 1; index < params.length; index++) {
               let body = await fetchFunc.fetchGet(`https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol=${params[index]}USDT`);
               if (!body.data) text += `Неверное значение:${params[index]}\n\n`;
               else text += `${body.data.an}/${body.data.q}` + "\n" + `Текущий курс:${body.data.c}` + "\n" + `Максимальное значение:${body.data.h}` + "\n" + `Минимальное значение:${body.data.l}\n\n`;
          }
          let callBack = await fetchFunc.fetchPost(text, req, res)
          res.write(callBack)
          res.end()
     } catch (error) {
          console.log(error)
     }
}
module.exports = { binanceBTC };