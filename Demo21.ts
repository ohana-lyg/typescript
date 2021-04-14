/*
 * @Author: your name
 * @Date: 2021-04-14 15:02:59
 * @LastEditTime: 2021-04-14 15:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo21.ts
 */

// class Selectgirl {
//     constructor(private girls : string[] | number[]) {}
//     getgirl(index : number): string | number {
//         return this.girls[index];
//     }
// }

//类中泛型的使用     泛型约束用关键字extends来进行约束
class Selectgirl<T extends number | string> {  //泛型约束
    constructor(private girls : T[]) {} //表示此时泛型的类型只能是数字或字符
    getgirl(index : number): T {
        return this.girls[index];
    }
}
const selectgirl = new Selectgirl<string>(['西施','貂蝉','王昭君','杨玉环']);
console.log(selectgirl.getgirl(2));


// interface girl {
//     name : string;
// }
// //泛型的继承
// class Selectgirl<T extends girl> {
//     constructor(private girls : T[]) {}
//     getgirl(index : number): string {
//         return this.girls[index].name;
//     }
// }
// const selectgirl = new Selectgirl([
//     {name:'西施'},
//     {name:'貂蝉'},
//     {name:'王昭君'},
//     {name:'杨玉环'}
// ]);
// console.log(selectgirl.getgirl(2));






