function solution(arr1, arr2) {
    let answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

function solution(arr1, arr2) {
    return arr1.map((a, idx1) => {
        return a.map((b, idx2) => b + arr2[idx1][idx2]);
    });
}
