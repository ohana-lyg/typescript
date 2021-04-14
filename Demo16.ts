/*
 * @Author: your name
 * @Date: 2021-04-14 12:05:06
 * @LastEditTime: 2021-04-14 12:32:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo16.ts
 */

//strict属性如果设置为true，就代表我们的编译和书写规范，要按照TypeScript最严格的规范来写
//如果我们把这个设置为false或者注释掉，意思是我们可以对设置一些不严格的写法。

//noImplicitAny属性的作用是，允许你的注解类型 any 不用特意表明
// function jspang(name) {
//     return name;
// }

//如果设置为noImplicitAny:true,意思就是值就算是 any（任意值），你也要进行类型注释
// function jspang(name: any) {
//     return name;
// }

//strictNullChecks设置为false 或者 注释  它的意思就是，不强制检查 NULL 类型
const jspang: string = null;

