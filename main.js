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
    this._length = this._items._length;
  }
}
