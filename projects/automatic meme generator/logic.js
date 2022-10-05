const showMemeBtn = document.getElementById("meme-btn")
const memeImage = document.getElementById("meme-img")
const memeTitle = document.getElementById("meme-title")

const generateMeme = async () => {
    const response = await fetch("https://meme-api.herokuapp.com/gimme")
    const data = await response.json();
    memeImage.setAttribute("src", data.url)
    memeTitle.innerText = data.title;
}
showMemeBtn.addEventListener('click', generateMeme);
generateMeme();