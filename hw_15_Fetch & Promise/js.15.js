/*Реализуйте приложение:

Перейдите по ссылке https://jsonplaceholder.typicode.com/
Во вкладке Resources лежит ключ /todos - Это именно те данные которые нам нужны
Далее напишите две функции getTodos & printTodos
Функция getTodos делает запрос по указанному адресу и забирает данные.
Функция printTodos создает список ul, и в каждый елемент li добавляет данные из полученного объекта с делом. Нам нужны ключи из объекта id title. */




// const URL = 'https://jsonplaceholder.typicode.com/todos';

// function getTodos() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(response => printTodos(response))
// }
// getTodos();


// function printTodos(response) {
//     const ul = document.createElement('ul');
//     document.body.append(ul);

//     response.forEach(todo => {
//         const li = document.createElement('li');
//         ul.append(li);
//         ul.style.listStyleType = 'none';
//         li.innerHTML = `${todo.id}. ${todo.title}`;
//     });
// }



//async await 

const URL = 'https://jsonplaceholder.typicode.com/todos';

async function getTodos() {
    try {
        const response = await fetch(URL);
        const todos = await response.json();
        return printTodos(todos);
    } catch (err) {
        console.log(new Error(err));
    }
}
getTodos();


function printTodos(todos) {
    const ul = document.createElement('ul');
    document.body.append(ul)

    todos.forEach(el => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        ul.append(li);
        li.innerHTML = `${el.id} ${el.title}`;
    });
}






