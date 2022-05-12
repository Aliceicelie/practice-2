const kirby = document.getElementById('kirby')
const content = document.getElementById('boxForContainers')
const hideBox1 = document.getElementById('hideBox1')
const hideBox2 = document.getElementById('hideBox2')


kirby.addEventListener('click', swapImg)

function swapImg()  {
    if (kirby.src.match('logos/kirby_logo.png')) {
        kirby.src = 'logos/kirby_logo2.png'
        addBoxes()
    } else {
        kirby.src = 'logos/kirby_logo.png'
        removeBoxes()
    }
}

let addBoxes = () => {
    content.innerHTML += `
    <div class="scndContainer" id="hideBox1">
        <h1>CEO of Age International</h1>
            <p>New York, Green Street</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga. Tempora, delectus iste? Laborum incidunt cupiditate neque deserunt! Voluptatum quisquam ipsum perferendis quae atque deleniti maxime magnam facilis consequuntur sed.</p>
    </div>

    <div class="firstContainer" id="hideBox2">
        <h1>Set Up</h1>
            <p>Jacksonville</p>
    </div>
`
}

function removeBoxes() {
    
}