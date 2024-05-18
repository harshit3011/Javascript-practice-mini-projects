const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')
if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    results.innerHTML = `<span>Please Enter valid credentials</span>`
    return;
  }
const heightVal= height/100;

const bmiVal = (weight/(heightVal*heightVal)).toFixed(2)

let result="Normal"
if(bmiVal<18.6){
    result="Under Weight"
}
else if(bmiVal>=18.6 && bmiVal<=24.9){
    result="Normal"
}
else{
    result="Overweight"
}
results.innerHTML=`<span>${result}</span>`
})