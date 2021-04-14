/*
 * @Author: your name
 * @Date: 2021-04-14 11:54:31
 * @LastEditTime: 2021-04-14 11:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo14.ts
 */

// class  Person{
//     public readonly _name : string;  //readonly只读属性
//     constructor(public name:string) {
//         this._name = name;
//     }
// }
// const person = new Person('jspang');
// // person._name = '技术胖';
// console.log(person._name);

//抽象类的关键词是abstract,里边的抽象方法也是abstract开头的
//抽象类跟父类很像，都需要继承，但是抽象类里一般都有抽象方法
//继承抽象类的类必须实现抽象方法才可以
abstract class girl {
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
}
class waiter extends girl {
    skill() {
        console.log('倒水');
        
    }
}

class BaseTeacher extends girl{
    skill() {
        console.log('泰式按摩');
        
    }
}

class seniorTeacher extends girl{
    skill() {
        console.log('SPA全身按摩');
        
    }
}

