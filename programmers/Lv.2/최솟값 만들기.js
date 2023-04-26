function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}

function solution2(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    return A.reduce((total, val, idx) => total + val * B[idx], 0);
  
}
