document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  console.log(inputText);
});

class List {
  constructor(name, items) {
    this._name = name;
    this._items = items || [];
  }

  get name() {
    return this._name;
  }

  get items() {
    return this._items;
  }

  set items(item) {
    this._items.push(item);
  }

  set name(name) {
    this._name = name;
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
