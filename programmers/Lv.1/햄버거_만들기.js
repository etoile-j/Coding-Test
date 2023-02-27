function solution(ingredient) {
    let answer = 0;
    let temp = [];
    for (let i = 0; i < ingredient.length; i++) {
        temp.push(ingredient[i]);
        if (temp.length > 3) {
            if (temp.slice(-4).join('') == '1231') {
                answer++;
                temp.splice(-4);
            }
        }
    }
    return answer;
}

// 시간 초과 떴던 코드
// function solution(ingredient) {
//     let answer = 0;
//     let str = ingredient.join('');
//     while (str.indexOf('1231') > -1) {
//         answer++;
//         str = str.replaceAll('1231', '');
//     }
//     return answer;
// }
