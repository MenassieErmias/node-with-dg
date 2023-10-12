const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

console.log('hello')

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'),"Nice to meet you, Menassie" ,(err) => {
    if (err) throw err;
    console.log('Write Complete');
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n yes it is ", (err) => {
        if (err) throw err;
        console.log('Append Complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'),path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if(err) throw err;
            console.log('Rename Complete')
        })
    })
})

