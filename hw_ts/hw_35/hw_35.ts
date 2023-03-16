interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: Array<IUser> = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];

//1. Создать строку из имен пользователей через запятую

function f1(arr: IUser[]): string {
    return arr
    .map(el => el.name)
    .join(', ');
}
console.log(f1(users));

//2. Посчитать общее колиeнство машин у пользователей

function f2(arr: IUser[]): number {
    return arr
        .filter(el => el.cars) //users у кого есть машины
        .map(el => el.cars) //только машины
        .reduce((acc, curr) => acc + curr.length, 0)
}
console.log(f2(users));


//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования


function f3(arr: IUser[]): IUser[] {
    return arr
        .filter(el => el.hasEducation)
}
console.log(f3(users));


//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных


function f4(arr: IUser[]): IUser[] {
    return arr
        .filter(el => el.animals)
}
console.log(f4(users));


//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую

function f5(arr:IUser[]): string {
    return arr
    .filter(el => el.cars) 
    .map(el => el.cars)
    .join(', ') 
}
console.log(f5(users));
