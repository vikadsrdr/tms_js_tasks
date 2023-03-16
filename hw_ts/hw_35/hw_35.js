var users = [
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
function f1(arr) {
    return arr
        .map(function (el) { return el.name; })
        .join(', ');
}
console.log(f1(users));
//2. Посчитать общее колиeнство машин у пользователей
function f2(arr) {
    return arr
        .filter(function (el) { return el.cars; }) //users у кого есть машины
        .map(function (el) { return el.cars; }) //только машины
        .reduce(function (acc, curr) { return acc + curr.length; }, 0);
}
console.log(f2(users));
//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function f3(arr) {
    return arr
        .filter(function (el) { return el.hasEducation; });
}
console.log(f3(users));
//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function f4(arr) {
    return arr
        .filter(function (el) { return el.animals; });
}
console.log(f4(users));
//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function f5(arr) {
    return arr
        .filter(function (el) { return el.cars; })
        .map(function (el) { return el.cars; })
        .join(', ');
}
console.log(f5(users));
