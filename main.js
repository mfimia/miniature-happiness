document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
});
const TODO_LIST = document.getElementById("todo-list");

class List {
  constructor(name, listType) {
    this._name = name;
    this._items = JSON.parse(localStorage.getItem(`${listType}`)) || [];
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

  addItem() {}

  display() {
    TODO_LIST.innerHTML = "";
    this._items.forEach((item) => {
      TODO_LIST.innerHTML += ``;
    });
  }
}

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
    localStorage.setItem("todo-list-classes", JSON.stringify(this));
  }
}

const testItem = new ListItem("hello");
testItem.addToTodoList();
