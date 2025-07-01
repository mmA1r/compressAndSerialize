import { serialize, deserialize, fillWithDigits, isArraysEqual } from '../utils.js';

[
    fillWithDigits(1),
    fillWithDigits(2),
    fillWithDigits(3)
].forEach(array => {
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
