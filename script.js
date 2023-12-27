var timeele = document.getElementsByClassName('time');
var dateele = document.getElementsByClassName('date');
var downbtn = document.getElementsByClassName('btn');
var taskcont = document.getElementsByClassName('task-container')
var remove = document.getElementsByClassName('remove');
function updatedatetime(){
let currdate = new Date();
let datestring = currdate.toDateString();
let timestring = currdate.toTimeString();
dateele[0].textContent = datestring;
timeele[0].textContent = timestring.slice(0,-30);
}
setInterval(updatedatetime,1000);
updatedatetime();
downbtn[0].addEventListener('click',function(){
    var taskname = prompt('Enter the task name')
    if(taskname!=null && taskname.trim()!= ''){
    var newele = '<div class="task" contentEditable="true"><div class="item"><input type="checkbox" class="noun">'+taskname+'</div><button><img src="Images/wrong.png" class="remove"></button></div>';
    
    taskcont[0].insertAdjacentHTML('beforeEnd',newele);
    // console.log(remove)
    }
})

document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove')) {
        let sparent = event.target.parentNode;
        let parent = sparent.parentNode;
        if (parent) {
            parent.remove();
        }
    }
});

