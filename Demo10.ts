/*
 * @Author: your name
 * @Date: 2021-04-13 19:41:22
 * @LastEditTime: 2021-04-13 19:59:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo10.ts
 */
class Lady {  //父类
    content = 'Hi，帅哥！';
    sayHello() {
        return this.content;
    }
}
//继承
class beauty extends Lady {  //子类
    // sayHello() {
    //     return 'Hi，honey!';   //类的重写
    // }

    sayHello() {
        return super.sayHello() + '你好！'; //表示在父类中的方法sayHello()后面加上“你好！”
    }

    sayLove() {
        return 'I love you';
    }
}
const goddess = new beauty();
console.log(goddess.sayHello());
console.log(goddess.sayLove());

