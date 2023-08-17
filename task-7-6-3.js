const num = +prompt("Введите число");
if (!Number.isInteger(num)) {
    alert("Можно вводить только число!");
} else {
    let arr = [];
    for (let i = 0; i < num + 1; i++) {
        arr.push(i);
    }

    console.log(arr);
}