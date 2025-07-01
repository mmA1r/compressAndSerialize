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
    const range = digits === 1 ? [1,9] : digits === 2 ? [10,99] : [100,300];

    let arr = [];

    for (let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }

    return arr;
};
