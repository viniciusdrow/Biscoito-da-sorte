const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector("#btnCookie")
const btnResetClick = document.querySelector("#btnResetClick")

const phrases = [
        "Ontem nunca mais se repetirá.",
        "Segue o teu caminho e faz aquilo que você ama.",
        "Na hora certa vai acontecer.",
        "Com o tempo tudo se acerta"
    
    ]

let phrasesCount = Math.round(Math.random() * 3)

function handleCookieClick() {
    toggleScreen()
    document.querySelector(".screen2 p").innerText = (phrases[phrasesCount])
}

btnCookie.addEventListener("click", handleCookieClick)

function handleResetClick() {
    toggleScreen()

    phrasesCount = Math.round(Math.random() * 3)
}

btnResetClick.addEventListener("click", handleResetClick)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}