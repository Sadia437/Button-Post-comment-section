function firstClick() {
    document.body.style.backgroundColor = 'green'
}

const purple = document.getElementById('purple');
purple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}


const yellow = document.getElementById('yellow');
yellow.onclick = function () {
    document.body.style.backgroundColor = 'yellow'
}

document.getElementById('black').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black'
})
