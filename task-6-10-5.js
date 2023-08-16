const category1 = {
    minAge: 18,
    maxAge: 21,
    maxAmount: 50000
}

const category2 = {
    minAge: 22,
    maxAge: 35,
    maxAmount: 400000
}

const category3 = {
    minAge: 36,
    maxAge: 65,
    maxAmount: 1000000
}

let age = +prompt("Введите Ваш возраст");
if (!Number.isInteger(age)) {
    alert("Возраст должен быть числом!");
} else {
    if (age < 18) {
        alert("Вам меньше 18 лет, мы не можем выдать Вам кредит!");
    } else {
        let amount = +prompt("Введите сумму кредита, кратную 1000");
        if (!Number.isInteger(amount)) {
            alert("Сумма кредита должна быть числом!");
        } else {
            const remainder = amount % 1000;
            const correctAmount = `${amount - remainder}`;
            const isAmountCorrect = remainder === 0;
            let maxAmount = 0;

            if ((category1.minAge <= age) && (age <= category1.maxAge)) {
                maxAmount = category1.maxAmount;
            }

            if ((category2.minAge <= age) && (age <= category2.maxAge)) {
                maxAmount = category2.maxAmount;
            }

            if ((category3.minAge <= age) && (age <= category3.maxAge)) {
                maxAmount = category3.maxAmount;
            }

            if (amount > maxAmount) {
                alert(`Максимальная сумма кредита составляет ${maxAmount}`);
            } else {
                if (isAmountCorrect) {
                    alert(`Вам одобрен кредит на сумму ${amount}`);
                } else {
                    alert(`Вы ввели число ${amount} не кратное 1000 , мы можем выдать Вам ${correctAmount}`);
                }
            }
        }
    }
}