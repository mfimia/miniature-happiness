class List {
  constructor(name, listType = "todo-list-classes") {
    this._name = name;
    this._items = JSON.parse(localStorage.getItem(`todo-list-classes`)) || [];
  }
  
  get name() {
    return this._name;
  }
  
  get items() {
    return this._items;
  }
  
  set name(name) {
    this._name = name;
  }
  
  display() {
    TODO_LIST.innerHTML = "";
    this._items.forEach((item) => {
      TODO_LIST.innerHTML += ``;
    });
  }
  
  addItem(text, done, deleted, dueDate) {
    const item = new ListItem(text, done, deleted, dueDate);
    item.addToTodoList(`todo-list-classes`);
  }
}

const TODO_LIST = document.getElementById("todo-list");
const toDoList = new List("todo-list-classes", "todo-list-classes");
const ITEMS_TODO_LIST = toDoList.items || [];

document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  toDoList.addItem(inputText);
});
class ListItem {
  constructor(text, done, deleted, dueDate) {
    this._text = text;
    this._done = done || false;
    this._deleted = deleted || false;
    this._createdAt = new Date();
    this._dueDate = dueDate || null;
  }

  get text() {
    return this._text;
  }
  get done() {
    return this._done;
  }
  get deleted() {
    return this._deleted;
  }
  get createdAt() {
    return this._createdAt;
  }
  get dueDate() {
    return this._dueDate;
  }

  set text(text) {
    this._text = text;
  }

  set done(boolean) {
    this._done = boolean;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  addToTodoList() {
    ITEMS_TODO_LIST.push(this);
    localStorage.setItem("todo-list-classes", JSON.stringify(ITEMS_TODO_LIST));
  }
}
