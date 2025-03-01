function getSequenceLength(number) {
    let count = 1;
    
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
        count++;
    }
    
    return count;
}

function findLongestCollatzSequence(limit) {
    let maxLength = 0;
    let maxNumber= 0;
    
    for (let i = 1; i < limit; i++) {
        const sequenceLength = getSequenceLength(i);
        
        if (sequenceLength > maxLength) {
            maxLength = sequenceLength;
            maxNumber = i;
        }
    }
    
    return {
        number: maxNumber,
        length: maxLength
    };
}


const result = findLongestCollatzSequence(1000000);

console.log(`
    Bir milyonun altındaki en uzun Collatz dizisini ${result.number} sayısı üretir.
    Dizinin uzunluğu ${result.length} dir.
`);
