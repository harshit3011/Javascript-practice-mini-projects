// const promiseOne = new Promise(function(resolve,reject){
//     //do an async task
//     //DB calls,network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Coolboi",email:"cool@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user)=>{
//     // console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
});

async function consumePromise(){
    try {
        const response=await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise()