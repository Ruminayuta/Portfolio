 'use strict';

const textInput = document.getElementById("my_text");
const textTodo = document.getElementById("idea");

const savedItems = JSON.parse(localStorage.getItem("todo-list")) || [];
savedItems.forEach(text => {
    addTodo(text); 
});

textInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const text = textInput.value.trim();
        if (text === "") return;

        addTodo(text);    
        saveToStorage();  
        textInput.value = "";
    }
});

function addTodo(text) {
    const list = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    list.classList.add('todo-action'); 
    span.textContent = text;
    button.textContent = '削除';
    button.type = 'button';
    button.classList.add('delate-button');

    button.addEventListener('click', function() {
        list.remove();
        saveToStorage(); 
    });

    list.appendChild(span);
    list.appendChild(button);
    textTodo.appendChild(list);
}

function saveToStorage() {
    const items = [];
    document.querySelectorAll('#idea span').forEach(span => {
        items.push(span.textContent);
    });
    localStorage.setItem("todo-list", JSON.stringify(items));
}
