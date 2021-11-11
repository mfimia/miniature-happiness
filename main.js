document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  console.log(inputText);
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
}

class ListItem {
  constructor(text, done, deleted, createdAt, dueDate) {
    this._text = text;
    this._done = done;
    this._deleted = deleted;
    this._createdAt = createdAt;
    this._dueDate = dueDate;
  }

  display() {
    this._items.forEach((item) => {
      console.log(item);
    });
  }
}

const test = new List("test", ["1", 2, 3]);
console.log(test.name);
test.name = "dude";
console.log(test.name);
test.items = "hi";
test.items = "hi";
console.log(test.items);
console.log(test.items.length);
console.log(typeof test);
