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
        alert(`${userName}: ${age}`);
    }
}