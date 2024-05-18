const list = document.getElementById('todo-list')

const addButton = document.getElementById('add-button')
let tasks = document.getElementById('total-tasks')
let totaltasks=0

addButton.addEventListener('click',()=>{
    const todoInput= document.querySelector('#todo-input').value
    const todo = String(todoInput).trim()  
    if(todo){
        const li = document.createElement('li')
        const text = document.createElement('span')
        const deleteButton = document.createElement('button')
        text.innerText=`${todo}`
        deleteButton.className='delete-button'
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click',()=>{
            li.remove()
            totaltasks--;
            tasks.innerText = totaltasks;
        })
        li.appendChild(text)
        li.appendChild(deleteButton)
        list.appendChild(li)
        
        totaltasks++
        tasks.innerHTML=totaltasks
    }
    else{
        alert('Please enter a valid task')
    }
})

