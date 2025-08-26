/* а следующим заданием будет - работа с формой, твое задание это создание формы с такими полями: 
name
surname
passportID
<button>Send data</button>
тоесть у тебя три поля для ввода (input) и обязательно добавляй placeholder
если длинна введеного текста больше 15 символов то тогда сделай border у инпута красным
при нажатии на кнопку форма должна очиститься и в консоль вывестись обьект : 
{
 name : "имя из формы"
 surname : "фамилия из формы"
 passportID : "паспорт айди из формы"
} */

const buttonElement = document.querySelector("button");
const nameInput = document.querySelector('[data-js-inputName]');
const surnameInput = document.querySelector('[data-js-inputSurname]');
const passportIDInput = document.querySelector('[data-js-inputPassportID]');

buttonElement.addEventListener("click", () => {
    const formValues = {
        name: nameInput.value,
        surname: surnameInput.value,
        passportID: passportIDInput.value
    };
    console.log(formValues);
    nameInput.value = "";
    surnameInput.value = "";
    passportIDInput.value = "";
    [nameInput, surnameInput, passportIDInput].forEach(input => {
        input.style.border = "";
    });
});

[nameInput, surnameInput, passportIDInput].forEach(input => {
    input.addEventListener("input", () => {
        if (input.value.length > 15) {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });
});