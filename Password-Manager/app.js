const btn=document.querySelector('.save');
const outer = document.querySelector('.passlist')
btn.addEventListener('click',()=>{
    const url=document.getElementById('url').value
    const email = document.getElementById('email').value
    const pass=document.getElementById('pass').value

    if(!url || !email || !pass){
        alert('Enter the credentials properly')
        return
    }
    console.log(url)
    console.log(email)
    console.log(pass)
    const newdiv= document.createElement('div')
    newdiv.className='subheadings'
    const website= document.createElement('h4')
    const em= document.createElement('h4')
    const password=document.createElement('h4')
    const button = document.createElement('button')
    button.textContent="Delete"
    button.className='del'
    website.className='website'
    em.className='email'
    password.className='pass'
    website.innerHTML=url.toString()
    em.innerHTML=email
    password.innerHTML=pass
    newdiv.appendChild(website)
    newdiv.appendChild(em)
    newdiv.appendChild(password)
    newdiv.appendChild(button)
    outer.appendChild(newdiv)
    button.addEventListener('click',()=>{
        newdiv.remove()
    })
})