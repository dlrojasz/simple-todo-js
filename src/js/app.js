const formTodo = document.querySelector("#formTodo"); //Refencia al form
const ulTodo = document.querySelector("#ulTodo"); //Referencia al ul

//Añadiendo un "li" al "ul" por cada todo
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class='bx bx-trash bx-sm bx-tada-hover delete'></i>
        </li>
      `;
      ulTodo.innerHTML += html;
};

//
formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = formTodo.inputTodo.value.trim();
    //Si contiene algun valor entonces es verdadero
    if (todo.length) {
        generateTemplate(todo);
        formTodo.reset(); //Reiniciando el input del formulario
    } else {
        console.log("Vacio");
    }
});

//Eliminando un to-do
ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});