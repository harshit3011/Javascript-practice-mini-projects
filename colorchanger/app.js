const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
    // const id = button.id
    // button.addEventListener('click',()=>{
    //     body.style.backgroundColor=id
    // })
    button.addEventListener('click',(e)=>{
        body.style.backgroundColor=e.target.id
    })
})

