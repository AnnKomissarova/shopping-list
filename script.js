const sendInput = document.querySelector('#input');
const items = document.querySelector('#items');

function createList() {
    const item = sendInput.value;
    const newItem = document.createElement("div");
    newItem.textContent = "- " + sendInput.value;

    newItem.addEventListener("click", function(){
        newItem.classList.toggle('done');
    })

    if(item != ''){
        items.append(newItem);
    }
        sendInput.value= '';   
}

input.addEventListener("keydown", function(event) {    
    if (event.key == 'Enter') {
        createList();
        }
});

