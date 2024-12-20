let datas = [
    {name : "naitik", role : "softwareEngineer"},
    {name : "aryan", role : "IT head"}
]

function pushData(data)
{
    return new Promise((resolve, reject)=>{
        console.log("task2")
        setTimeout(()=>{
            datas.push(data)
            resolve("data pushed successfully")
        }, 2000)
    })
    
}

function getData()
{
    setTimeout(()=>{console.log(datas)}, 1000)
}
console.log("task1")
let p = pushData({name : "naitik", role : "softwareEngineering"})
console.log("task3")
p.then((resp)=>{
    console.log(resp)
    getData()
})
console.log('task4')