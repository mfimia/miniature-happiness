document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  console.log(inputText);
});
