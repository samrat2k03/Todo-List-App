const todoInput = document.querySelector("#input-submit");
const todoResult = document.querySelector("#result");
const button1 = document.querySelector("#btn-1");

const showResult = () => {
        const textValue = todoInput.value;
        todoResult.innerHTML += `
        <li>
            ${textValue}
            <button id="wrong" onClick="deleteTodo(event)">❌</button>
            <button id="tick" onClick="tickTodo(event)">✔</button>
        </li>`;
        todoInput.value = "";

        if(textValue === ""){
            alert("Please enter todo")
            return;
        }
}

const clearResult = () => {
    todoResult.innerHTML = "";
}

const deleteTodo = (event) => {
    event.target.parentNode.remove();
}

const tickTodo = (event) => {
    const textValue = todoInput.value;
    const liElement = event.target.parentNode;
    liElement.style.textDecoration = "line-through";
    liElement.style.color = "red";
    todoResult.innerHTML +=`<li>${textValue} + (completed)`
};
