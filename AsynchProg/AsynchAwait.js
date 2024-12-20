let datas = [
    {name : "naitik", role : "softwareEngineer"},
    {name : "aryan", role : "IT head"}
]

function pushData(data)
{
    return new Promise((resolve, reject)=>{
        console.log("task3")
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
async function f()
{
    console.log("task2")
    let resp = await pushData({name : "naitik", role : 'softwareEngineering'})
    console.log(resp)
    getData()
}
f()
console.log('task4')