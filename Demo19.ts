/*
 * @Author: your name
 * @Date: 2021-04-14 14:10:12
 * @LastEditTime: 2021-04-14 14:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo19.ts
 */

//枚举类型  enum

//初级程序员写法:
// function getServe(status: number) {
//     if (status === 0) {
//       return "massage";
//     } else if (status === 1) {
//       return "SPA";
//     } else if (status === 2) {
//       return "dabaojian";
//     }
// }
// const result = getServe(0);
// console.log(`我要去${result}`);

//中级程序员写法:
// const Status = {
//     MASSAGE: 0,
//     SPA: 1,
//     DABAOJIAN: 2,
// };
// function getServe(status: any) {
//     if (status === Status.MASSAGE) {
//       return "massage";
//     } else if (status === Status.SPA) {
//       return "spa";
//     } else if (status === Status.DABAOJIAN) {
//       return "dabaojian";
//     }
// }
// const result = getServe(Status.SPA);
// console.log(`我要去${result}`);

//高级程序员写法:
enum Status {   //枚举
    MASSAGE, //MASSAGE = 1,表示从1开始
    SPA,
    DABAOJIAN,
}
function getServe(status: any) {
    if (status === Status.MASSAGE) {
      return "massage";
    } else if (status === Status.SPA) {
      return "spa";
    } else if (status === Status.DABAOJIAN) {
      return "dabaojian";
    }
}
const result = getServe(Status.SPA);//const result = getServe(1);
console.log(`我要去${result}`);
//打印出枚举的值(也有叫下标的)，那知道下标后，也可以通过反查的方法，得到枚举的值
console.log(Status.MASSAGE, Status[1]);



