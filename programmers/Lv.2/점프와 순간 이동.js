function solution(n) {
    let jump = 0;
    const binary = n.toString(2);

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) jump++;
    }
    return jump;
}

function solution2(n) {
    return n.toString(2).replace(/0/g, '').length;
}
