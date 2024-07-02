let todo = [];
let req = prompt("Enter A value like(add, delete, list, quit)");

while (true) {
  if (req === "quit") {
    alert("Todo app Quit");
    break;
  }
  if (req === "list") {
    document.write(todo);
  } else if (req === "add") {
    let task = prompt("Enter text.....");
    todo.push(task);
    console.log("add successfully");
  }
  req = prompt("Enter A value like(add, delete, list, quit");
}
