const { readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log('first read');
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err)
            return
        }
        console.log('second read');
        const second = result
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
            if (err) {
                console.log(err)
                return
            }
            console.log('done with the writting')
        })
    })
})
console.log('starting next task');
// this is non blocking with reference to the server.