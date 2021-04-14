/*
 * @Author: your name
 * @Date: 2021-04-14 15:48:21
 * @LastEditTime: 2021-04-14 16:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Demo22-23\src\page.ts
 */

//命名空间声明的关键词是namespace
namespace Home {   
    
    // export class Header {
    //     constructor() {
    //       const elem = document.createElement("div");
    //       elem.innerText = "This is Header";
    //       document.body.appendChild(elem);
    //     }
    // }
    
    // export class Content {
    //     constructor() {
    //       const elem = document.createElement("div");
    //       elem.innerText = "This is Content";
    //       document.body.appendChild(elem);
    //     }
    // }
    
    // export class Footer {
    //     constructor() {
    //       const elem = document.createElement("div");
    //       elem.innerText = "This is Footer";
    //       document.body.appendChild(elem);
    //     }
    // }

    //需要暴露出去的类，可以使用export关键词，这样只有暴漏出去的类是全局的
    export class Page {  //其他的不会再生成全局污染了
      constructor() {
        new Components.Header();
        new Components.Content();
        new Components.Footer();
      }
    }
}