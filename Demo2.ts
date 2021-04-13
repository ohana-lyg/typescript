/*
 * @Author: your name
 * @Date: 2021-04-12 21:03:16
 * @LastEditTime: 2021-04-12 21:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo2.ts
 */
// static Typing 静态类型  一旦定义不可再改变
const count: number = 1;  //变量count在程序中永远是 number类型
// count = "jspang"; 给count复制一个字符串，会报错了
interface XiaoJieJie {  //接口  定义对象类型
    uname: string;
    age: number;
}
  
const xiaohong: XiaoJieJie = {  //uname和age属性
    uname: "小红",
    age: 18,
};
console.log(xiaohong.age);
