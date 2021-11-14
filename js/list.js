const slide = document.querySelector('.about-me');
let text = document.createElement('p');
let but = document.createElement('button')


slide.addEventListener('click', () => {
    slide.classList.add('active');
    text.className = 'open-text';
    text.innerText = `I am 20 yers old and I am a student. Besides I am hardworking and responsible person who likes improving my own skills. Except programming I love travelling and sports. My favorite kind of sport is football.`
    but.className = 'cancel-but'
    but.innerHTML = `<img src='/photo/close-btn.png' alt='btn-close'>`
    slide.append(text);
    slide.append(but);
})

slide.addEventListener('dblclick', () => {
    slide.removeChild(text);
})