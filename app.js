const kirby = document.getElementById('kirby')
const content = document.getElementById('boxForContainers')

kirby.addEventListener('click', function swapImg()  {
    if (kirby.src.match('logos/kirby_logo.png')) {
        kirby.src = 'logos/kirby_logo2.png'
    } else {
        kirby.src = 'logos/kirby_logo.png'
    }
})