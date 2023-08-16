let promo = prompt("Введите промокод");
promo = promo.toLowerCase();
if (promo === "скидка") {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}