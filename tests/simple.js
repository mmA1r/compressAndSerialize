import { serialize, deserialize, isArraysEqual } from "../utils.js";

const testArrays = [
    [ 54 ],
    [ 1, 300, 128, 7, 255 ],
    [ 15, 15, 16, 17, 100, 200, 250, 300 ],
    [ 3, 3, 3, 50, 60, 70, 80, 90, 100, 110, 120, 130 ],
    [ 5, 10, 15, 20, 25, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 ]
];

testArrays.forEach(array => {
    const stingify = array.toString();

    const serialized = serialize(array);
    const deserialized = deserialize(serialized);

    console.log(
        `
            [${array}]: \n
            STR: ${stingify}
            SERIALIZED: ${serialized}
            DESERIALIZED: ${deserialized}
            RAITO: ${(serialized.length / stingify.length).toFixed(2)}
            EQUAL: ${isArraysEqual(array, deserialized)}
        `
    );
});
