/*
 * @Author: your name
 * @Date: 2021-04-13 16:09:51
 * @LastEditTime: 2021-04-13 19:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\Demo9.ts
 */
//interface接口
interface Girl {   //把两个重复的类型注解，定义成统一的接口
    name: string;
    age: number;
    height: number;
    weight ?: number  //冒号前 加 问号 不作强制要求
    [propname:string]:any;  //可添加自己需要内容/不写
    say():string; //返回值类型是string类型
}
//继承
interface Teacher extends Girl {  //此接口继承了Girl这个接口的东西
    teach():string;
}

class XiaoJieJie implements Girl {  //接口可以对进行类的约束
    name = '貂蝉';
    age = 18;
    height = 170;
    say() {
      return '我先自我介绍';
    }
}
const girl = {
    name: '西施',
    age: 20,
    height: 168,
    weight: 50,   //可写可不写
    sex:'女',
    say() {
        return '希望予以考虑'
    },
    teach() {
        return '我是一个老师';
    }
};
const getResume = (girl: Girl) => {
    console.log('面试者：' + girl.name);
    console.log('年龄：' + girl.age);
    girl.sex && console.log('性别：' + girl.sex);
    console.log('身高：' + girl.height);
    girl.weight && console.log('体重：' + girl.weight + 'kg');
};
const screenResume = (girl: Teacher/*Girl*/) => {  //表示只看Teacher的简历
    girl.age < 24 && girl.height >= 165 && console.log(girl.name + "进入面试");
    (girl.age >= 24 || girl.height < 165) && console.log(girl.name + "你被淘汰");
};  
getResume(girl);  
screenResume(girl);  //若Girl接口中没有添加teach()方法，会报错


/* const screenResume = (name : string, age : number, height : number) => {
    age < 24 && height >= 165 && console.log(name + '进入面试');
    (age >= 24 || height < 165) && console.log(name + '你被淘汰');
}

const getResume = (name : string, age : number, height : number) => {
    console.log('面试者：' + name);
    console.log('年龄：' + age);
    console.log('身高：' + height);
    screenResume(name,age,height);
}

getResume('西施',20,168);
getResume('貂蝉',18,170);
getResume('王昭君',25,168);
getResume('杨玉环',22,158); */

// screenResume('西施',20,168);
// screenResume('貂蝉',18,170);
// screenResume('王昭君',25,168);
// screenResume('杨玉环',22,158);