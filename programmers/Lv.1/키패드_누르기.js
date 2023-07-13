function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        0: [3, 1],
    };
    let left = [3, 0];
    let right = [3, 2];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += 'L';
            left = keypad[numbers[i]];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += 'R';
            right = keypad[numbers[i]];
        } else {
            let l =
                Math.abs(left[0] - keypad[numbers[i]][0]) +
                Math.abs(left[1] - keypad[numbers[i]][1]);
            let r =
                Math.abs(right[0] - keypad[numbers[i]][0]) +
                Math.abs(right[1] - keypad[numbers[i]][1]);
            if (l < r) {
                answer += 'L';
                left = keypad[numbers[i]];
            } else if (l > r) {
                answer += 'R';
                right = keypad[numbers[i]];
            } else {
                answer += hand[0].toUpperCase();
                if (hand === 'right') right = keypad[numbers[i]];
                else left = keypad[numbers[i]];
            }
        }
    }

    return answer;
}
