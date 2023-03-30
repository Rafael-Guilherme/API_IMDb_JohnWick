document.addEventListener('DOMContentLoaded', function() {

    // wick4()
    // wick1()
    // wick2()
    // wick3()

})

function abrirModal(modalID) {
    // seleciona o elemento do modal
    let modal = document.getElementById(modalID);
    let fundoDark = document.querySelector('.fundoDark')
    // exibe o modal
    modal.style.display = "block";
    fundoDark.style.display = "block";
  }

function fecharModal(modalID) {
    let modal = document.getElementById(modalID);
    let fundoDark = document.querySelector('.fundoDark')

    modal.style.display = "none";
    fundoDark.style.display = "none";
}

// //Banner do Hero
// function wick4() {
//     fetch('https://imdb-api.com/API/Images/k_g0om8t4y/tt10366206')
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.items[data.items.length - 2].image
//             const imageWick4 = data.items[data.items.length - 7].image
//             const imageHero = document.querySelector('#image-hero')
//             const imageBanner4 = document.querySelector('#john_wick4')
//             imageHero.src = imageUrl
//             imageBanner4.src = imageWick4
//         })
//         .catch(error => console.log(error))
// }

// //John Wick 1 
// function wick1() {   
//     fetch('https://imdb-api.com/pt-br/API/Title/k_g0om8t4y/tt2911666')
//         .then(response => response.json())
//         .then(data => {
//             const imageWick1 = data.image
//             const imageBanner1 = document.querySelector('#john_wick1')
//             imageBanner1.src = imageWick1
//         })
//         .catch(error => console.log(error))
// }

// //John Wick 2 
// function wick2() {   
//     fetch('https://imdb-api.com/pt-br/API/Title/k_g0om8t4y/tt4425200')
//         .then(response => response.json())
//         .then(data => {
//             const imageWick2 = data.image
//             const imageBanner2 = document.querySelector('#john_wick2')
//             imageBanner2.src = imageWick2
//         })
//         .catch(error => console.log(error))
// }

// //John Wick 3 
// function wick3() {   
//     fetch('https://imdb-api.com/pt-br/API/Title/k_g0om8t4y/tt6146586')
//         .then(response => response.json())
//         .then(data => {
//             const imageWick3 = data.image
//             const imageBanner3 = document.querySelector('#john_wick3')
//             imageBanner3.src = imageWick3
//         })
//         .catch(error => console.log(error))
// }

