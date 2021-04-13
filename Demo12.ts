/*
 * @Author: your name
 * @Date: 2021-04-13 20:40:33
 * @LastEditTime: 2021-04-13 20:52:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo12.ts
 */
class Person {
    // public name : string;
    // constructor(name:string) {  //构造函数
    //     this.name = name;
    // }

    constructor(public name:string) {}
}
//在子类里写构造函数时，必须用super()调用父类的构造函数
//如果需要传值，也必须进行传值操作
//父类没有构造函数，子类也要使用super()进行调用，否则就会报错
class Teacher extends Person { 
    constructor(public age : number){
        super('jspang');
    }
}

const teacher = new Teacher(18)
console.log(teacher.age);
console.log(teacher.name);



