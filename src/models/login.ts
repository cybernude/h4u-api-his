const request = require("request");
// import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt';
;

export class LoginModel {
  

  smartHealhtLogin(username: any, password: any) {
    return new Promise((resolve: any, reject: any) => {
      var options = {
        method: 'POST',
        url: 'https://smarthealth.service.moph.go.th/phps/public/api/v3/gettoken',
        headers:
        {
          'postman-token': 'c63b4187-f395-a969-dd57-19018273670b',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { username: username, password: password },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }

  async compareHash(password, hash) {
    if(bcrypt.compareSync(password, hash)) {
      return true;
     } else {
      return false;
     }
  }

}