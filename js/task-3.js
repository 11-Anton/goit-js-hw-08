const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChangeName);

function onInputChangeName(event) {
    const nameUser = event.currentTarget.value.trim();
    if (nameUser !== '') {
        span.textContent = nameUser;
    } else {
        span.textContent = 'Anonymous';
    }
}
