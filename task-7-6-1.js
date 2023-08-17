const phrase = prompt("Введите слово");
let str = phrase.toLowerCase();
str = str.replaceAll(" ", "");
let palindrom = true;

for (let i = 0; i < str.length; i++) {
    const symbol1 = str[i];
    const symbol2 = str.at(-(i + 1));
    
    if (symbol1 !== symbol2) {
        palindrom = false;
        break;
    }
}

if (palindrom) {
    alert(`Слово (или фраза) ${phrase} является палиндромом`);
} else {
    alert(`Слово (или фраза) ${phrase} не является палиндромом`);
}