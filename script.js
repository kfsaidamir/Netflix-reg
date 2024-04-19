

// Valigatsiya
//https://regex101.com/

const regExName =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExNumber = /^[0-9]{9,12}$/
const text = document.querySelector('.text')
const placeholder2 = document.querySelector('.password::-webkit-input-placeholder')
const password = document.querySelector('.password')
const form = document.querySelector('form')
const dark = document.querySelector('.dark')
const reg = document.querySelector('.regestration')
const h2 = document.querySelector('h2')
const h1 = document.querySelector('h1')
const section = document.querySelector('section')
const but = document.querySelector('.but')
const email = "example@example.com";
const kil = document.querySelector('.kil')
const lit = document.querySelector('.lit')
text.addEventListener('keyup', () => {
    if (regExName.test(email)) {
        text.style.border = '2px solid green'
    } else {
        text.style.border = '2px solid red'
    }
})

password.addEventListener('keyup', () => {
    if (regExNumber.test(password.value)) {
        password.style.border = '2px solid green'
    } else {
        password.style.border = '2px solid red'
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (regExName.test(text.value) && regExNumber.test(password.value)) {
        document.location = 'netflix.html'
    }
})

// but.addEventListener('click', () => {
//     const sec = document.querySelector('section');
//     if (but.textContent === 'NIGHT') {
//         but.textContent = 'DAY';

//         but.style.color = 'black';
//         kil.style.color = 'white'
//         lit.style.color = 'white'
//         sec.style.backgroundColor = 'white';
//         reg.style.backgroundColor = 'white';
//         reg.style.border = '1px solid black'
//         h1.style.color = 'black';
//         text.classList.add('day-mode'); 
//         password.classList.add('day-mode'); 
//     } else {
//         but.textContent = 'NIGHT';
//         but.style.color = 'white';
//         kil.style.color = 'black'
//         lit.style.color = 'black'
//         reg.style.border = '1px solid white'
//         sec.style.backgroundColor = 'black';
//         reg.style.backgroundColor = 'rgba(0, 0, 0, 0.80)';
//         h1.style.color = 'white';
//         text.classList.remove('day-mode'); 
//         password.classList.remove('day-mode'); 
//     }
// });

text.addEventListener('click', () =>{
    kil.classList.add('grid')
   setTimeout(() => {
     kil.classList.remove('grid')
   }, 4000);
})


password.addEventListener('click', () =>{
    lit.classList.add('grid')
   setTimeout(() => {
     lit.classList.remove('grid')
   }, 4000);
})