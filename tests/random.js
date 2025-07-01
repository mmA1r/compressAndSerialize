import { serialize, deserialize, randomNumbers, isArraysEqual } from '../utils.js';

[50, 100, 500, 1000].forEach(count => {
    const array = randomNumbers(count);

    const stingify = array.toString();

    const serialized = serialize(array);
    const deserialized = deserialize(serialized);

    console.log(
        `
            [${array.length}]: \n
            STR: ${stingify.length}
            SERIALIZED: ${serialized.length}
            DESERIALIZED: ${deserialized.toString().length}
            RAITO: ${(serialized.length / stingify.length).toFixed(2)}
            EQUAL: ${isArraysEqual(array, deserialized)}
        `
    );
});
