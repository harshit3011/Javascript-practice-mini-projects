const btn = document.querySelector('.btn')
const text = document.querySelector('.ptext')

btn.addEventListener('click',()=>{
    
    fetch('https://dummyjson.com/quotes')
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json()
    })
    .then(data=>{
        const index= Math.floor(Math.random()*30)
        const quote = data.quotes[index].quote
        text.classList.add('fade')
        text.innerHTML = quote
        
    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    })
    btn.innerHTML ="Regenerate Tweet"
    btn.classList.add('btn-bottom')
})