/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
 constructor() {
  this.todoList = []
 }
 add(todo) {
  this.todoList.push(todo)
 }
 remove(index) {
  let newList = []
  for(let i = 0; i < this.todoList.length; i++) {
    if(i == index) {
      continue
    }
    newList.push(this.todoList[i])
  }
  this.todoList = newList
 }
 update(index, updatedTodo) {
  for(let i = 0; i < this.todoList.length; i++) {
    if(i == index) {
      this.todoList[i] = updatedTodo;
    }
  }
 }

getAll() {
  return this.todoList;
}
get(index) {
  return this.todoList[index] || null;
}

clear() {
  this.todoList = []
}
}

module.exports = Todo;
