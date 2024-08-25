function addToList() {
    var taskname = document.getElementById('inputs').value;
    var todoid = document.getElementById('mytodo');

    var newtodo = document.createElement('div');

    var task = document.createElement('li');
    task.innerHTML = taskname;
    var deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');

    newtodo.appendChild(task);
    newtodo.appendChild(deletebtn);

    todoid.appendChild(newtodo);

    document.getElementById('inputs').value = '';

}
var todoid = document.getElementById('mytodo');
todoid.addEventListener('click', function (e) {
    if (e.target.tagName === 'I')
    {
        e.target.parentElement.remove();
    }
});