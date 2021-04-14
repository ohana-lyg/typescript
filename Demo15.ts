/*
 * @Author: your name
 * @Date: 2021-04-14 12:16:16
 * @LastEditTime: 2021-04-14 12:27:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo15.ts
 */

//此时我们打开tsconfig.json文件，找到complilerOptions属性下的removeComments:true选项，把注释去掉。
//这个配置项的意思是，编译时不显示注释，也就是编译出来的js文件不显示注释内容。
//如
//编译成js文件，下面的注释 I love you 不会出现

// I love jspang
const person: string = "jspang";


//include  exclude  files
//当有demo1.ts  demo2.ts两个文件时

/* 
 1 ---- include配置   用来指定要编译的文件的
"include":["demo1.ts"]   //表示只编译demo1.ts文件，而不编译demo2.ts文件

 2 ---- exclude配置    //除指定的文件外，进行编译
"exclude":["demo1.ts"]   //表示编译demo2.ts文件，而不编译demo1.ts文件

 3 ---- files 配置    跟include几乎一样
*/
