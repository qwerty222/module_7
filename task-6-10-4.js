let userName = prompt("Введите ваше имя");
if (userName === "") {
    alert("Поле имя не может быть пустым!");
} else  {
    let birthYear = +prompt("введите год рождения");
    if (!Number.isInteger(birthYear)) {
        alert("Год должен быть числом!");
    } else {
        let currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;
        let lastDigit = age % 10;
        if (lastDigit === 0 || lastDigit === 5 || lastDigit === 6 || 
            lastDigit === 7 || lastDigit === 8 || lastDigit === 9) {
            age = age + " лет";
        }
        if (lastDigit === 1) {
            age = age + " год";
        }
        if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
            age = age + " года";
        }
        alert(`${userName}: ${age}`);
    }
}