/*
 * @Author: your name
 * @Date: 2021-04-12 21:16:49
 * @LastEditTime: 2021-04-13 13:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo3.ts
 */
const counter : number = 666;   //: number 基础静态类型
const myname : string = 'lyg';//如冒号后跟 null、undefinde、symbol、boolean、void

//对象类型
const girl : {
    uname:string,
    age:number
} = {
    uname:'西施',
    age:16
}

//数组类型  此数组里的数据必须是字符串
const girls : string  [] = ['西施','貂蝉','王昭君','杨玉环'] 

//类-类型  声明类 用类的形式，来定义变量
class Person{}
const beauty : Person = new Person();

//函数类型
const goddess : () => string = () => {
    return 'diaocan';
}
