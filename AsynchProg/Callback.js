let datas = [
    {name : "naitik", role : "softwareEngineer"},
    {name : "aryan", role : "IT head"}
]

function pushData(data, callBackFunction)
{
    setTimeout(()=>{
        callBackFunction()
        datas.push(data)
    }, 2000)
}

function getData()
{
    setTimeout(()=>{console.log(datas)}, 1000)
}

pushData({name : "mangla", role : "businessMan"}, getData)