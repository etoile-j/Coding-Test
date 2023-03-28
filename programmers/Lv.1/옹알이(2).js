function solution(babbling) {
    let answer = 0;
    const can = ['aya', 'ye', 'woo', 'ma'];

    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        for (let j = 0; j < 4; j++) {
            if (word.includes(can[j]) > -1) {
                if (word.includes(can[j] + can[j])) break;
                word = word.split(can[j]).join(' ');
            }
        }
        if (word.trim() === '') answer++;
    }
    return answer;
}
