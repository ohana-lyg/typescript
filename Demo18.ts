/*
 * @Author: your name
 * @Date: 2021-04-14 12:53:40
 * @LastEditTime: 2021-04-14 14:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo18.ts
 */

//只有联合类型存在的情况下，才需要类型保护
//联合类型
//类型保护 ： 类型断言  in语法   typeof语法   instanceof语法
interface waiter {
    anjiao:boolean;
    say:() => {};
}
interface jsTeacher {
    anjiao:boolean;
    skill:() => {};
}
//联合类型，可以认为一个变量可能有两种或两种以上的类型，关键符号是|(竖线)
// function judgewho(animal : waiter | jsTeacher) {
    
//     //类型断言
//     // if(animal.anjiao) {
//     //     (animal as jsTeacher).skill();
//     // }
//     // else {
//     //     (animal as waiter).say();
//     // }

//     //in语法
//     // if('skill' in animal) {
//     //     animal.skill();
//     // }
//     // else {
//     //     animal.say();
//     // }

// }
    //typeof语法
// function add (first : string | number ,second : string | number) {
//     if(typeof first === 'string' || typeof second === 'string') {
//         return `${first}${second}`;
//     }
//     else {
//         return first + second;
//     }
// }
    
    //instanceof语法    instanceof 只能用在类上
class NumberObj {
    count : number;
}
function addObj(first : object | NumberObj,second : object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    else {
        return 0;
    }
}

