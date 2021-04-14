/*
 * @Author: your name
 * @Date: 2021-04-14 15:48:21
 * @LastEditTime: 2021-04-14 16:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Demo22-23\src\page.ts
 */

//import进行引入
import { Header, Content, Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}