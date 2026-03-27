const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyMessage = document.getElementById("empty-message"); 

inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function updateEmptyMessage() {
    if(listContainer.children.length === 0){
        emptyMessage.style.display = "block"; 
    } else {
        emptyMessage.style.display = "none";
    }
}

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateEmptyMessage();
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateEmptyMessage();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        listContainer.innerHTML = savedData;
    } else {
        listContainer.innerHTML = "";
    }
    updateEmptyMessage(); 
}
showTask();

