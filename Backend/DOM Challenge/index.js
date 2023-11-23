const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    /*
      document.lastElementChild.lastElementChild.children[3].lastElementChild.innerHTML = "I win!"
      */
    document.querySelector('ul').lastElementChild.innerText = 'Angela'
})
