 //model

 // if localstorage has a todos array, then use it 
 // otherwise use the default array
 let todos;
 // Retrieve localStorage
 const savedTodos = JSON.parse(localStorage.getItem('todos'));
 // check if it's an array
 if (Array.isArray(saveTodos)) {
     todos = saveTodos;
 } else {
     todos = [{
         title: 'Get groceries',
         dueDate: '2022-06-07',
         id: 'id1'
     }, {
         title: 'Wash my car',
         dueDate: '2022-06-07',
         id: 'id2'
     }, {
         title: 'Make dinner',
         dueDate: '2022-06-07',
         id: 'id3'
     }];
 }


 //Creates a todo
 function createTodo(title, dueDate) {
     const id = ' ' + new Date().getTime();

     todos.push({
         title: title,
         dueDate: dueDate,
         id: id
     });

     saveTodos();
 }
 // Deletes a todo
 function removeTodo(idToDelete) {
     todos = todos.filter(function(todo) {
         // If the id of this todo matches idToDelete, return false
         // For everything else,
         if (todo.id === idToDelete) {
             return false;
         } else {
             return true;
         }
     });
     saveTodos();
 }

 function saveTodos() {
     localStorage.setItem('todos', JSON.stringify(todos));
 }

 // controller
 function addTodo() {
     const textbox = document.getElementById('todo-title');
     const title = textbox.value;

     const datePicker = document.getElementById('date-picker');
     const dueDate = datePicker.value;


     createTodo(title, dueDate); // to create the todo
     render(); // to update the view

 }

 function deleteTodo(event) {
     const deleteButton = event.target;
     const idToDelete = deleteButton.id;

     removeTodo(idToDelete);
     render();
 }

 // view
 function render() {
     // reset our list
     document.getElementById('todo-list').innerHTML = ' ';

     todos.forEach(function(todo) {
         const element = document.createElement('div');
         element.innerText = todo.title + ' ' + todo.dueDate;

         const deleteButton = document.createElement('button');
         deleteButton.innerText = 'Delete';
         deleteButton.style = 'margin-left: 15px; width: 100px; padding: 0.3rem 1.5rem; font-size: 1.1rem';
         deleteButton.onclick = deleteTodo;
         deleteButton.id = todo.id;
         element.appendChild(deleteButton);

         const todoList = document.getElementById('todo-list');
         todoList.appendChild(element);
     });


 };