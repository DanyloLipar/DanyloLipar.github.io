const slide = document.querySelector('.about-me');
const text = document.createElement('p');


slide.addEventListener('click', () => {
    text.className = 'open-text';
    if (text.innerText === "") {
        text.style.display = 'initial';
        text.innerText = `I am 20 yers old and I am a student. Besides I am hardworking and responsible person who likes improving my own skills. Except programming I love travelling and sports. My favorite kind of sport is football.`;
    } else {
        text.innerText = "";
        text.style.display = "none";
    }
    slide.append(text);
})