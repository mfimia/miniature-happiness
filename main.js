const TODO_LIST = document.getElementById("todo-list");
class List {
  constructor(name, listType) {
    this._name = name;
    this._listType = listType;
    this._items = JSON.parse(localStorage.getItem(listType)) || [];
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
    this._items = JSON.parse(localStorage.getItem(this._listType)) || [];
    this._items.forEach((item) => {
      TODO_LIST.innerHTML += `<li>
      <button onclick="${item.markDone()}">Done</button>
      <span style"color:${item.done ? "red" : ""}">${item._text}</span>
      </li>`;
    });
    document.querySelector("#counter").innerHTML = toDoList.items.length;
  }

  addItem(text, done, deleted, dueDate) {
    const item = new ListItem(text, done, deleted, dueDate);
    ITEMS_TODO_LIST.push(item);
    localStorage.setItem(`${this._listType}`, JSON.stringify(ITEMS_TODO_LIST));
  }
}

const toDoList = new List("todo-list-classes", "todo-list-classes");
let ITEMS_TODO_LIST = toDoList.items || [];

const clear = (listType) => {
  console.clear();
  ITEMS_TODO_LIST = [];
  localStorage.setItem(listType, JSON.stringify(ITEMS_TODO_LIST));
  toDoList.display();
};

document.getElementById("test").addEventListener("click", () => {
  clear("todo-list-classes");
});

document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  toDoList.addItem(inputText);
  toDoList.display();
});
class ListItem {
  constructor(text, done, deleted, dueDate) {
    this._text = text;
    this._done = done || false;
    this._deleted = deleted || false;
    this._createdAt = new Date();
    this._dueDate = dueDate || null;
    this._id = Math.floor(Math.random() * 100000);
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
  get id() {
    return this._id;
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

  markDone() {
    this._done = !this._done;
  }
}

toDoList.display();
