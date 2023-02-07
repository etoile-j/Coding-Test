function solution(s) {
    let numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    for (let i = 0; i < numbers.length; i++) {
        s = s.replaceAll(numbers[i], i);
    }
    return Number(s);
}

function solution2(s) {
    let numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    for (let i = 0; i < numbers.length; i++) {
        s = s.split(numbers[i]);
        s = s.join(i);
    }

    return Number(s);
}
