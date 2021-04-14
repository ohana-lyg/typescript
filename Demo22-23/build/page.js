"use strict";
/*
 * @Author: your name
 * @Date: 2021-04-14 16:06:00
 * @LastEditTime: 2021-04-14 16:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Demo22-23\src\components.ts
 */
var Components;
(function (Components) {
    //子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
/*
 * @Author: your name
 * @Date: 2021-04-14 15:48:21
 * @LastEditTime: 2021-04-14 16:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Demo22-23\src\page.ts
 */
//命名空间声明的关键词是namespace
var Home;
(function (Home) {
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
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
