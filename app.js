const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNum = colorGenerator();
    console.log(randomNum)
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum]
})

function colorGenerator() {
    return Math.floor(Math.random() * colors.length);
}
