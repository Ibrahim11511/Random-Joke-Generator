const jokeContaner = document.querySelector('.joke')
const generatorBtn = document.querySelector('.generator')

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'



const getJoke = async () => {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.type);
    data.type == 'single'
        ? renderOnePartJoke(data)
        : renderTwoPartJoke(data)
}

getJoke()

generatorBtn.addEventListener('click', () => {
    getJoke()
})


function renderOnePartJoke(ele) {
    jokeContaner.innerHTML = `<p>${ele.joke}</p>`
}

function renderTwoPartJoke(joke) {
    jokeContaner.innerHTML = `
    <p>${joke.setup}</p>
    <p>${joke.delivery}</p>
    `
}