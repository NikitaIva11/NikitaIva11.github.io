const { fetchFunc } = require("../fetchClass/fetchClass");


async function binanceBTC(req, res, params) {
     try {
          if(!params)return;
          let text = ''
          for(let  index = 0;index<params.length;index++){
               let body = await fetchFunc.fetchGet(params[index]);
               
               if (!body.data) text += `Неверное значение:${keys}\n\n`;
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