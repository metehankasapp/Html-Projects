const ul = document.querySelector('.list-group');
const deleteAll = document.querySelector('.link');
const taskList = document.querySelector('#task-list');

taskList.addEventListener('click',deleteItem);



//delete all
deleteAll.addEventListener('click',asd);
function asd(e){
    var count = ul.childElementCount;
    
    for(var i=0;i<count;i++){
        ul.children[0].remove();
    }
    e.preventDefault();
}






//delete one

function deleteItem(e) {
    if (confirm('are you sure ?')) {

        if (e.target.className === 'fas fa-trash-alt') {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}



//add one

var addElement =document.getElementById('linksds');
var inputValue = document.querySelector('input');

// li oluşturduk













addElement.addEventListener('click',function(e){

    const nTask = document.createElement('li');
    nTask.className= 'list-group-item';
    nTask.appendChild(document.createTextNode(inputValue.value));

    //içine a oluşturduk.
    const nTaskA = document.createElement('a');
    nTaskA.setAttribute('href', '#');
    nTaskA.innerHTML = '<i class="fas fa-trash-alt"></i>';


    nTask.innerText=inputValue.value;

    nTask.appendChild(nTaskA);
    
    document.querySelector('ul').appendChild(nTask);

    inputValue.value ='';
    e.preventDefault();
    
    
})





