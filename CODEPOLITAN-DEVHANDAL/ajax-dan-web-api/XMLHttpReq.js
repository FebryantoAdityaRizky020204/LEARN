/**
 * TODO: XMLHttpRequest
 * ? Cara "Original" untuk mengirim request via JavaScript
 * ? tidak mendukung promisess, jadi bisa memungkinkan callback-hell
 * ? namanya susah diketik, aneh, besar kecil tidak jelas
 */

// ! CONTOH
if(false){
    const request = new XMLHttpRequest()
    request.onload = function() {
        let data = JSON.parse(this.response)
        console.log(data);
        
    }
    
    request.onerror = function(){
        console.log('error ', this);
    }
    
    request.open('GET', 'https://swapi.dev/api/people/10', true)
    request.setRequestHeader('Accept', 'application/json')
    request.send()
}