/*
 * @Author: your name
 * @Date: 2021-04-13 14:04:45
 * @LastEditTime: 2021-04-13 14:18:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo5.ts
 */

//函数返回类型注解
// function getTotal(one : number , two : number) : number {
//     return one + two;
// }
// const total = getTotal(1, 2);

//函数无返回值定义方法
// function sayhello() : void {
//     console.log('Hello World');
// }

//never返回值类型  一个函数是永远也执行不完的，就可以定义返回值为never
// function errorfunction() : never {
//     throw new Error()
//     console.log("Hello World");
// }

// function forNever() : never {
//     while (true) {}
//     console.log("Hello JSPang");
// }

//函数参数为对象（解构）时
function getNumber({ one }: { one: number }): number {
    return one;
}
const one = getNumber({ one: 1 });

function add({ one, two }: { one: number, two: number }): number {
    return one + two;
} 
const three = add({ one: 1, two: 2 });