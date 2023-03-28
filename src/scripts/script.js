document.addEventListener('DOMContentLoaded', function() {
    

    fetch('https://imdb-api.com/API/Images/k_g0om8t4y/tt10366206')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.items[data.items.length - 2].image
            const imageHero = document.querySelector('#image-hero')
            imageHero.src = imageUrl
        })
        .catch(error => console.log(error))
})