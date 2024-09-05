// import { mkdir } from 'node:fs'

const fs = require('fs')
const folderName = process.argv[2] || "Project"

// Asynchronus
// fs.mkdir('project', { recursive: true }, (err) => {
//     if (err) throw err
// })

try {

    // Synchronus
    fs.mkdirSync(folderName, { recursive: true })
    fs.writeFileSync(`${folderName}/index.html`, '<h1>Hello World</h1>')
    fs.writeFileSync(`${folderName}/args.js`, '')
    console.log('Berhasil');
} catch (err) {
    console.log(err);
}
