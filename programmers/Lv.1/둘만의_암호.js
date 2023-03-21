function solution(s, skip, index) {
    skip = skip.split('').map((v) => v.charCodeAt());
    s = s.split('').map((v) => v.charCodeAt());

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < index; j++) {
            s[i]++;
            while (skip.includes(s[i])) s[i]++;
            if (s[i] === 123) s[i] -= 26;
            while (skip.includes(s[i])) s[i]++;
        }
    }

    return s.map((v) => String.fromCharCode(v)).join('');
}

function solution2(s, skip, index) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ].filter((v) => !skip.includes(v));
    return s
        .split('')
        .map((v) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length])
        .join('');
}

function solution3(s, skip, index) {
    let answer = '';
    const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
        new RegExp(`[^${skip}]`, 'g')
    );
    //skip이 아닌 것들을 뽑아냄

    for (const v of s) {
        const newIdx = matched.indexOf(v) + index;
        answer += matched[newIdx % matched.length];
    }
    return answer;
}
