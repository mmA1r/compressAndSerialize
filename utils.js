export function serialize(nums) {
    const bytes = [];

    for (let number of nums) {
        do {
            let byte = number & 0b01111111;
            number >>>= 7;
    
            if (number !== 0) {
                byte |= 0b10000000;
            }
    
            bytes.push(byte);
        } while (number !== 0);
    }

    const binary = String.fromCharCode(...bytes);

    return btoa(binary);
}

export function deserialize(str) {
    const binary = atob(str);

    const bytes = Array.from(
        binary,
        (char) => char.charCodeAt(0)
    );

    const result = [];
    let value = 0;
    let shift = 0;

    for (const byte of bytes) {
        value |= (byte & 0b01111111) << shift;

        if (byte & 0b10000000) {
            shift += 7;
        } else {
            result.push(value);
            value = 0;
            shift = 0;
        }
    }

    return result;
}

function testCase(name, arr) {
    const json = JSON.stringify(arr);
    const stingify = arr.toString();

    const serialized = serialize(arr);

    const jsonRatio = (serialized.length / json.length * 100).toFixed(1) + '%';
    const stringifyRatio = (serialized.length / stingify.length * 100).toFixed(1) + '%';

    console.log('isEqual: ', isArraysEqual(arr, deserialize(serialized)));

    //console.log(
    //    `${name.padEnd(25)} | count=${arr.length.toString().padStart(4)} | ` +
    //    `STRINGIFY=${stingify.length.toString().padStart(4)} | ` +
    //    `SERIALIZED=${serialized.length.toString().padStart(4)} | ratio=${ratio} | ` +
    //    `[${arr}] | [${deserialize(serialized)}]`
    //);
}

export function isArraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
  
export function randomNumbers(n) {
    return Array.from(
        { length: n },
        ()=> Math.floor(Math.random()*300) + 1
    );
}

export function fillWithDigits(digits) {
    const range = digits === 1 ? [0,9] : digits === 2 ? [10,99] : [100,300];

    let arr = [];

    for (let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }

    return arr;
};
