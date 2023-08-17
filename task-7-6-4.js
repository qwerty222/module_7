let index = 0;
for (let i = 0; i < 3; i++) {
    let result = '';
    for (let j = 0; j < 3; j++) {
        let s = index % 2 === 0 ? "x" : "o";
        index++;
        result += `${s} `; 
    }
    console.log(result);
}