const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const result = [];

for (value of Object.values(obj)) {
    if (Array.isArray(value)) {
        for (arrayValue of value) {
            result.push(arrayValue);
        }
    } else {
        result.push(value);
    }
}

console.log(result);