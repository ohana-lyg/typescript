/*
 * @Author: your name
 * @Date: 2021-04-14 14:42:00
 * @LastEditTime: 2021-04-14 15:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo20.ts
 */
//工作中，经常使用<T>来作泛型的表示

//函数泛型    泛型的定义使用<>（尖角号）进行定义的
// function join(first :string | number , second :string | number) {
//     return `${first}${second}`;
// }
// join('jspang','.com');

// function join<T>(first: T, second: T) {
//     return `${first}${second}`;
// }
// join <string>("jspang", ".com"); //join <number>(1, 2);

//泛型中数组的使用
// function myFun<T>(params: T[]) {   // Array<T> == T[]
//     return params;
// }
// myFun <string>(["123", "456"]);

//多个泛型的定义
// function join<T, P>(first: T, second: P) {
//     return `${first}${second}`;
// }
// join <number, string> (1, "2");

//泛型的类型推断
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
join(1, "2");




