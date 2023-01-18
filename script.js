let addItem = document.querySelector('.add-btn');
addItem.onclick = addItemToList;

function addItemToList(){
    let val = document.querySelector('.search').value;
    document.querySelector('.task-list').innerHTML += '<li>' + val + '<span class="remove" onclick="deleteElem(this)">x</span></li>';
}

let removeItem = document.querySelectorAll('.list-body ul .remove');

function deleteElem(el){
    el.parentElement.remove();
};