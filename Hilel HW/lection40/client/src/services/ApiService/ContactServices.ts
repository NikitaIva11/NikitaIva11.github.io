import { IForm } from "../../model/contactForm.model";
import { AuthMiddleware } from "../AuthMidlleware";

export class ContactService{
     static async send(form:IForm) {
          const data = await fetch(process.env.REACT_APP_HOST_NAME + '/contact/ask', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(form)
          });
          const result = await data.json();
          return result;
          
     }
}