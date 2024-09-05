const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    document.querySelectorAll('img').forEach((img) => img.remove())
    const keyword = form.elements.query.value
    const config = {
        params: { q: keyword }
    }
    
    const res = await axios.get('http://api.tvmaze.com/search/shows', config)
    showImage(res.data)
    form.elements.query.value = ''
})

const showImage = (shows) => {
    for(let result of shows){
        const img = document.createElement('IMG')
        img.src = result.show.image.medium
        document.body.append(img)
    }
}