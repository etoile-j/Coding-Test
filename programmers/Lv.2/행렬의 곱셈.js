function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length), () =>
        Array(arr2[0].length).fill(0)
    );

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}

function solution2(arr1, arr2) {
    return arr1.map((row) =>
        arr2[0].map((_, i) =>
            row.reduce((pre, rowNum, idx) => pre + rowNum * arr2[idx][i], 0)
        )
    );
}
