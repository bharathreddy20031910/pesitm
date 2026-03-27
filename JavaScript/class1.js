
// function sum(a,b){
// return a+b;
// }

// function sumAll(a,b,sumAllData){
//     return console.log(sumAllData())
// } 

// console.log(sumAll(1,2 ,sum))

// CallBack and Call Back Hell

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("Data :" , dataId)
//     }, 10000);
//     if(getNextData){
// getNextData()
//     }
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

function getData(dataId,getNextData){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(dataId === 3){
reject("This is not Valid id")
        }
        console.log("Data :" ,dataId)
        resolve("Sucess")
    }, 1000);
    if(getNextData){
    getNextData()
}
})

}

// getData(1)
// .then(()=>getData(2))
// .then(()=>getData(3))
// .catch((error)=>{ console.log(error)})



async function getAllData(){
    await getData(1)
     await getData(2)
}

getAllData()
