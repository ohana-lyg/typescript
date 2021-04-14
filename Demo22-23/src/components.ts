/*
 * @Author: your name
 * @Date: 2021-04-14 16:06:00
 * @LastEditTime: 2021-04-14 16:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Demo22-23\src\components.ts
 */

namespace Components {
    //子命名空间
    export namespace SubComponents {
        export class Test {}
    }

    export class Header {
        constructor() {
          const elem = document.createElement("div");
          elem.innerText = "This is Header";
          document.body.appendChild(elem);
        }
    }
    
    export class Content {
        constructor() {
          const elem = document.createElement("div");
          elem.innerText = "This is Content";
          document.body.appendChild(elem);
        }
    }
    
    export class Footer {
        constructor() {
          const elem = document.createElement("div");
          elem.innerText = "This is Footer";
          document.body.appendChild(elem);
        }
    }
}