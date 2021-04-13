/*
 * @Author: your name
 * @Date: 2021-04-13 14:19:43
 * @LastEditTime: 2021-04-13 14:42:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo6.ts
 */
//一般数组定义
const numberArr: number[] = [1, 2, 3];

const stringArr: string[] = ["a", "b", "c"];

const undefinedArr: undefined[] = [undefined, undefined];

const arr: (number | string)[] = [1, "string", 2];

//数组中对象类型的定义
// const xiaoJieJies: { name: string, age: Number }[] = [
//     { name: "刘英", age: 18 },
//     { name: "谢大脚", age: 28 },
// ];

// type Lady = { name: string, age: Number };  //类型别名

// type Lady = { name: string, age: Number };
// const xiaoJieJies: Lady[] = [
//   { name: "刘英", age: 18 },
//   { name: "谢大脚", age: 28 },
// ];

class Madam {    //类定义类型别名，限制数组类型
    name: string;
    age: number;
}
  const xiaoJieJies: Madam[] = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
];

