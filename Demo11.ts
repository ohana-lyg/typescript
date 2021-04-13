/*
 * @Author: your name
 * @Date: 2021-04-13 19:59:43
 * @LastEditTime: 2021-04-13 20:38:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo11.ts
 */

//类的访问类型  private protected public
//private 访问属性的意思是，只允许在类的内部被调用，外部不允许调用
//protected 允许在类内及继承的子类中使用,但是在外部调用还是会报错
class Person {
    public name : string;
    public sayHello(){
        console.log(this.name + ' say Hello')
    }
}
class Teacher extends Person {
    public sayBye() {
        this.name;
    }
}

const person = new Person();
person.name = 'jspang';
person.sayHello();
console.log(person.name);



