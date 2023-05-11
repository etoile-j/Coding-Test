function solution(s) {
    let answer = [];
    const changeStr = s.replaceAll('{', '[').replaceAll('}', ']');
    const arr = eval(changeStr).sort((a, b) => a.length - b.length);

    arr.map((a) =>
        a.map((v) => {
            if (!answer.includes(v)) answer.push(v);
        })
    );
    return answer;
}

function solution2(s) {
    return s
        .slice(2, -2)
        .split('},{')
        .map((nums) => nums.split(',').map((num) => Number(num)))
        .sort((a, b) => a.length - b.length)
        .reduce(
            (acc, cur) => [...acc, ...cur.filter((val) => !acc.includes(val))],
            []
        );
}

// s를 배열(모양)로 바꿔주는 다른 방법
//1.
JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));

//2.
s.slice(2, -2).split('},{');
//후에 숫자로 매핑

//3.
s.match(/{[\d,]+}/g);
