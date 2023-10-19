// The below means that even if you click outside of the buttons (since it is outside of the divs), the eventlistener is still triggered.
// document.querySelector(".set").addEventListener("click", () => {
//     alert("I was clicked");
// });
//
// This uses a for each loop
// const selection = document.querySelectorAll(".drum");
//
// selection.forEach(btu => {
//     btu.addEventListener("click", handleClick);
// });
//
// function handleClick() {
//     alert("I was clicked!");
// }

function audioHandler (classKey) {
    let audio
    switch (classKey) {
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break
        case 'a':
            audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break
        case 's':
            audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break
        case 'j':
            audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break
        case 'k':
            audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break
        case 'l':
            audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break
        default:
            console.dir(classKey)
            break
    }
    return audio
}

// This uses a conditional and targets butttons inside a certain div only. See https://javascript.info/bubbling-and-capturing

const wrapper = document.querySelector('.set')

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON'
    if (isButton) {
        const btnInnerHTML = event.target.innerHTML
        console.dir(btnInnerHTML)
        audioHandler(btnInnerHTML)
    }
})

document.addEventListener('keydown', (event) => {
    console.log(`The ${event.key} was pressed.`)
    audioHandler(event.key)
})
