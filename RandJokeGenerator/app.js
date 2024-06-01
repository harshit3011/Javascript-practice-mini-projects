const btn = document.getElementById('btn')
const joke = document.getElementById('joke')
btn.addEventListener('click',()=>{
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();})
    .then(data=>{
        joke.classList.add("fade")
        joke.innerHTML=`${data.joke}`
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
})
