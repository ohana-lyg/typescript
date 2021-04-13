/*
 * @Author: your name
 * @Date: 2021-04-13 20:56:31
 * @LastEditTime: 2021-04-13 22:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo13.ts
 */

//类的getter 和setter   getter的关键字为get    setter的关键字为set
// class goddess {
//     constructor(private _age : number) {}
//     get age() {
//         return this._age - 10;
//     }
//     set age(age : number) {
//         this._age = age;
//     }
    
// }
// const Lady = new goddess(28);
// Lady.age = 25;
// console.log(Lady.age);

//static 静态类
class Girl {
    static saylove() {   //用static声明的属性和方法
        return 'I love you';
    }
}
// const girl = new Girl();
console.log(Girl.saylove());  //不需要进行声明对象，类名加上方法就可以直接使用

  