// ! #2
console.log('Hello World');
console.log(process.argv);

const args = process.argv.slice(2)
for (let arg of args) {
    console.log(`Selamat Datang ${arg}`);
}

// ? Perintah node args.js John Doe