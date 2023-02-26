
const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

//1. Создать строку из названий предметов написаных через запятую

const str = Object.keys(subjects).join(", ");
console.log(str);


//2. Посчитать общее количество студентов и учителей на всех предметах

let students = 0;
let teachers = 0;

for (let key in subjects) {
    students += subjects[key].students;
    teachers += subjects[key].teachers
}

console.log(students, teachers);

//3. Получить среднее количество студентов на всех пердметах

countSubj = Object.keys(subjects).length //общее число предметов

let stuObj = console.log(students / countSubj);

//4. Создать массив из объектов предметов

let arr = [];

for (let key in subjects) {
    arr.push(subjects[key])
}
console.log(arr);


//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let newArr = arr.sort((a, b) => b.teachers - a.teachers);
console.log(newArr);




