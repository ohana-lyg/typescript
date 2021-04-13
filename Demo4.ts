/*
 * @Author: your name
 * @Date: 2021-04-13 13:35:05
 * @LastEditTime: 2021-04-13 14:04:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo4.ts
 */
// type annotation 类型注解
// type inferrence 类型推断

// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

let count : number;  //类型注解
count = 110;


let counter = 119;  //类型推断

/* const one = 1;
const two = 2;
const three = one + two; */

function getTotal(one : number , two : number) {
    return one + two;
  }
  const total = getTotal(1, 2);

  const XiaoJieJie = {
    name: "刘英",
    age: 18,
  };