/**
 * TODO: AXIOS
 * ? merupakan library pihak ketiga untuk melakukan HTTPRequest [yang populer]
 * ? [https://github.com/axios/axios] [https://axios-http.com/docs/intro] REFERENSI
 */

if(false) {
    axios.get('https://swapi.dev/api/people/100')
        .then((res) => {
            // console.log(res); // ! untuk mengambil semua response
            console.log(res.data); // ? untuk mengambil hanya datanya saja
        })
        .catch((err) => {
            console.log(err.message); 
            //? .message untuk menampilkan pesan error
            // ! err memiliki banyak ibect yang bisa dilihat sendiri
        })
}


// ? CONTOH MENGGUNAKAN ASYNC
if(false){
    const getPeople = async (id) => {
        try {
            const res = await axios.get(`https://swapi.dev/api/people/${id}`)
            console.log(res);
        } catch(err){
            console.log(err);
            console.log(err.message);
        }
    }

    getPeople(100)
}

// ? CONTOH JIKA INGIN MENAMBAHKAN HEADER KE AXIOS
if(false) {

    const jokes = document.querySelector('#jokes')
    
    const addJoke = async () => {
        const jokeText = await getJokes()
        const newLi = document.createElement('LI')
        newLi.append(jokeText)
        jokes.append(newLi)
    }
    
    const getJokes = async () => {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
    
        try {
            const res = await axios.get('https://icanhazdadjoke.com/', config)
            return res.data.joke;
        } catch (err) {
            return 'No Jokes Available';
        }
    }
    
    const button = document.querySelector('button')
    button.addEventListener('click', addJoke)
}
