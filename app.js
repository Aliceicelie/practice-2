const kirby = document.getElementById('kirby')
const content = document.getElementById('boxForContainers')
const showLess = document.getElementById('show_less')
const showMore = document.getElementById('show_more')


kirby.addEventListener('click', swapImg)

function swapImg()  {
    if (kirby.src.match('logos/kirby_logo.png')) {
        kirby.src = 'logos/kirby_logo2.png'
        toggleDivs()
    } else {
        kirby.src = 'logos/kirby_logo.png'
        killDivs()
    }
}

const toggleDivs = () => {
        if (showMore.style.display = 'none') {
            showMore.style.display = 'block'
        }
}

const killDivs = () => {
    if (showMore.style.display = 'block') {
        showMore.style.display = 'none'
    }
}