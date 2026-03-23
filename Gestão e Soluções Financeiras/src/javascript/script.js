const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const description = document.querySelector('#description');
    const value = document.querySelector('#moeda');
    const date = document.querySelector('#date');
    const movement = document.querySelector('input[name="moviment"]:checked');

    // limpa erros antes
    clearError(description);
    clearError(value);
    clearError(date);
    clearRadioError();

    // valida descrição
    if (isEmpty(description.value)) {
        showError(description, 'Descrição obrigatória');
        isValid = false;
    }

    // valida valor
    if (isEmpty(value.value) || Number(value.value) <= 0) {
        showError(value, 'Digite um valor válido');
        isValid = false;
    }

    // valida data
    if (isEmpty(date.value)) {
        showError(date, 'Selecione uma data');
        isValid = false;
    }

    // valida radio
    if (!movement) {
        showRadioError('Selecione uma opção');
        isValid = false;
    }

    if (isValid) {
        alert('Formulário válido ✅');
        form.reset();
    }
});


// ===== REMOVE ERRO AO DIGITAR =====
const inputs = document.querySelectorAll('.form-control');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (!isEmpty(input.value)) {
            clearError(input);
        }
    });
});


// ===== REMOVE ERRO RADIO =====
const radios = document.querySelectorAll('input[name="moviment"]');

radios.forEach(radio => {
    radio.addEventListener('change', clearRadioError);
});


// ===== FUNÇÕES =====
function showError(input, message) {
    if (!input) return;

    const box = input.closest('.input-box');
    if (!box) return;

    const span = box.querySelector('.error');
    if (!span) return;

    span.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
    box.classList.add('invalid');
}

function clearError(input) {
    if (!input) return;

    const box = input.closest('.input-box');
    if (!box) return;

    const span = box.querySelector('.error');
    if (!span) return;

    span.innerHTML = '';
    box.classList.remove('invalid');
}

function showRadioError(message) {
    const container = document.querySelector('.radio-container');
    if (!container) return;

    const span = container.querySelector('.error');
    if (!span) return;

    span.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
}

function clearRadioError() {
    const span = document.querySelector('.radio-container .error');
    if (span) span.innerHTML = '';
}

function isEmpty(value) {
    return value.trim() === '';
}

