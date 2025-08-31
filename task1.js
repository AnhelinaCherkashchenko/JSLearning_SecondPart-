/* тебе надо будет получить все li елементы со страницы через напмриер 
const items = document.querySelectorAll("li");
после чего перебери каждый li и присвой им красный цвет */
const items = document.querySelectorAll("li");
items.forEach((listElement) => {
  listElement.style.color = "red";
});