function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = arr1.map((i) => i.toString(2).padStart(n, 0));
    arr2 = arr2.map((i) => i.toString(2).padStart(n, 0));

    for (let i = 0; i < arr1.length; i++) {
        let temp = '';
        for (let j = 0; j < n; j++) {
            temp += (arr1[i][j] | arr2[i][j]) == 1 ? '#' : ' ';
        }
        answer.push(temp);
    }
    return answer;
}

function solution(n, arr1, arr2) {
    return arr1.map((arr1, i) =>
        (arr1 | arr2[i])
            .toString(2)
            .padStart(n, 0)
            .replace(/0/g, ' ')
            .replace(/1/g, '#')
    );
}
// 2진수로 변환할 때부터 | 사용하고, replace로 #이나 공백으로 변환
